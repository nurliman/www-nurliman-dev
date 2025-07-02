import { browser } from "$app/environment";
import { HEADER_HEIGHT } from "$lib/constants";
import debounce, { type DebouncedFunc } from "lodash-es/debounce";
import last from "lodash-es/last";
import maxBy from "lodash-es/maxBy";
import throttle from "lodash-es/throttle";
import { writable } from "svelte/store";

export const activeSection = writable<string>("");

// Configuration parameters
export type ScrollSpyConfig = {
  // Visibility thresholds
  dominantVisibilityThreshold: number; // 50% - Tier 1
  significantVisibilityThreshold: number; // 20% - Tier 2
  minimalVisibilityThreshold: number; // 5% - Tier 3

  // Scoring weights
  visibilityWeight: number; // 60%
  directionalWeight: number; // 25%
  proximityWeight: number; // 10%
  stabilityWeight: number; // 5%

  // Directional bias strength
  directionalBiasStrength: number; // 1.0 = normal, 2.0 = strong

  // Debouncing and stability
  debounceMs: number; // Base debounce time
  scrollVelocityThreshold: number; // Pixels per ms for rapid scroll detection
  hysteresisZone: number; // Percentage buffer for switching
  stabilityThreshold: number; // 10% - difference threshold for stability bonus

  // Performance
  scrollThreshold: number; // Minimum scroll change to recalculate
  headerOffset: number; // Header height offset
};

const defaultConfig: ScrollSpyConfig = {
  dominantVisibilityThreshold: 0.5,
  significantVisibilityThreshold: 0.2,
  minimalVisibilityThreshold: 0.05,
  visibilityWeight: 0.6,
  directionalWeight: 0.25,
  proximityWeight: 0.1,
  stabilityWeight: 0.05,
  directionalBiasStrength: 1.5,
  debounceMs: 200,
  scrollVelocityThreshold: 2.0,
  hysteresisZone: 0.1,
  stabilityThreshold: 0.1,
  scrollThreshold: 10,
  headerOffset: HEADER_HEIGHT + 20, // Use consistent header height with extra padding
};

type SectionMetrics = {
  id: string;
  element: HTMLElement;
  top: number;
  bottom: number;
  height: number;
  visibilityScore: number;
  directionalScore: number;
  proximityScore: number;
  stabilityScore: number;
  totalScore: number;
  visibilityPercentage: number;
};

type ScrollState = {
  currentScrollY: number;
  previousScrollY: number;
  scrollDirection: "up" | "down" | "none";
  scrollVelocity: number;
  lastUpdateTime: number;
};

export class ScrollSpy {
  private config: ScrollSpyConfig;
  private sections: string[];
  private sectionElements: Map<string, HTMLElement> = new Map();
  private scrollState: ScrollState;
  private currentActiveSection: string = "";
  private debouncedCalculation: DebouncedFunc<() => void>;
  private throttledScrollHandler: DebouncedFunc<() => void>;
  private rafId: number | null = null;
  private cleanupFunctions: (() => void)[] = [];

  constructor(sections: string[], config: Partial<ScrollSpyConfig> = {}) {
    this.config = { ...defaultConfig, ...config };
    this.sections = sections;
    this.scrollState = {
      currentScrollY: 0,
      previousScrollY: 0,
      scrollDirection: "none",
      scrollVelocity: 0,
      lastUpdateTime: Date.now(),
    };

    // Create debounced calculation function
    this.debouncedCalculation = debounce(() => {
      this.calculateActiveSection();
    }, this.config.debounceMs);

    // Create throttled scroll handler
    this.throttledScrollHandler = throttle(() => {
      this.updateScrollState();
      this.scheduleCalculation();
    }, 16); // ~60fps

    this.init();
  }

  private init(): void {
    if (!browser) return;

    // Cache section elements
    this.cacheSectionElements();

    // Initialize scroll state
    this.scrollState.currentScrollY = window.scrollY;
    this.scrollState.previousScrollY = window.scrollY;

    // Set up event listeners
    this.setupScrollListener();
    this.setupResizeListener();

    // Initial calculation
    this.calculateActiveSection();
  }

  private cacheSectionElements(): void {
    this.sectionElements.clear();

    for (const sectionId of this.sections) {
      const element = document.getElementById(sectionId);
      if (element) {
        this.sectionElements.set(sectionId, element);
      }
    }
  }

  private setupScrollListener(): void {
    const handleScroll = () => {
      if (this.rafId) return;

      this.rafId = requestAnimationFrame(() => {
        this.throttledScrollHandler();
        this.rafId = null;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    this.cleanupFunctions.push(() => {
      window.removeEventListener("scroll", handleScroll);
      if (this.rafId) {
        cancelAnimationFrame(this.rafId);
      }
    });
  }

  private setupResizeListener(): void {
    const handleResize = debounce(() => {
      this.cacheSectionElements();
      this.calculateActiveSection();
    }, 250);

    window.addEventListener("resize", handleResize);
    this.cleanupFunctions.push(() => {
      window.removeEventListener("resize", handleResize);
      handleResize.cancel();
    });
  }

  private updateScrollState(): void {
    const now = Date.now();
    const currentScrollY = window.scrollY;
    const timeDelta = now - this.scrollState.lastUpdateTime;
    const scrollDelta = Math.abs(currentScrollY - this.scrollState.previousScrollY);

    // Only update if significant scroll change
    if (scrollDelta < this.config.scrollThreshold) return;

    this.scrollState.previousScrollY = this.scrollState.currentScrollY;
    this.scrollState.currentScrollY = currentScrollY;
    this.scrollState.scrollVelocity = timeDelta > 0 ? scrollDelta / timeDelta : 0;
    this.scrollState.lastUpdateTime = now;

    // Determine scroll direction
    if (currentScrollY > this.scrollState.previousScrollY + 5) {
      this.scrollState.scrollDirection = "down";
    } else if (currentScrollY < this.scrollState.previousScrollY - 5) {
      this.scrollState.scrollDirection = "up";
    } else {
      this.scrollState.scrollDirection = "none";
    }
  }

  private scheduleCalculation(): void {
    // Adaptive debouncing based on scroll velocity
    const isRapidScroll = this.scrollState.scrollVelocity > this.config.scrollVelocityThreshold;

    if (isRapidScroll) {
      // For rapid scroll, use longer debounce
      const rapidScrollDebounced = debounce(() => {
        this.calculateActiveSection();
      }, this.config.debounceMs * 2);
      rapidScrollDebounced();
    } else {
      this.debouncedCalculation();
    }
  }

  private calculateActiveSection(): void {
    const viewport = this.getViewportInfo();
    const sectionMetrics = this.calculateSectionMetrics(viewport);

    if (sectionMetrics.length === 0) return;

    // Handle special boundary cases
    const boundarySection = this.handleBoundaryCases(sectionMetrics, viewport);
    if (boundarySection) {
      this.setActiveSection(boundarySection);
      return;
    }

    // Apply tier-based decision logic
    const winner = this.selectWinnerByTiers(sectionMetrics);

    if (winner && this.shouldUpdateActiveSection(winner.id)) {
      this.setActiveSection(winner.id);
    }
  }

  private getViewportInfo() {
    return {
      top: window.scrollY + this.config.headerOffset,
      bottom: window.scrollY + window.innerHeight,
      height: window.innerHeight - this.config.headerOffset,
      center: window.scrollY + window.innerHeight / 2,
    };
  }

  private calculateSectionMetrics(
    viewport: ReturnType<typeof this.getViewportInfo>,
  ): SectionMetrics[] {
    const metrics: SectionMetrics[] = [];

    for (const [id, element] of this.sectionElements) {
      const rect = element.getBoundingClientRect();
      const elementTop = window.scrollY + rect.top;
      const elementBottom = elementTop + rect.height;

      // Calculate intersection with viewport
      const intersectionTop = Math.max(viewport.top, elementTop);
      const intersectionBottom = Math.min(viewport.bottom, elementBottom);
      const intersectionHeight = Math.max(0, intersectionBottom - intersectionTop);

      if (intersectionHeight <= 0) continue;

      const visibilityPercentage = this.calculateVisibilityPercentage(
        intersectionHeight,
        rect.height,
        viewport.height,
      );

      const metric: SectionMetrics = {
        id,
        element,
        top: elementTop,
        bottom: elementBottom,
        height: rect.height,
        visibilityScore: this.calculateVisibilityScore(visibilityPercentage),
        directionalScore: this.calculateDirectionalScore(elementTop, elementBottom, viewport),
        proximityScore: this.calculateProximityScore(elementTop, elementBottom, viewport),
        stabilityScore: this.calculateStabilityScore(id),
        totalScore: 0,
        visibilityPercentage,
      };

      // Calculate weighted total score
      metric.totalScore =
        metric.visibilityScore * this.config.visibilityWeight +
        metric.directionalScore * this.config.directionalWeight +
        metric.proximityScore * this.config.proximityWeight +
        metric.stabilityScore * this.config.stabilityWeight;

      metrics.push(metric);
    }

    // Use lodash orderBy for sorting
    return metrics.sort((a, b) => b.totalScore - a.totalScore);
  }

  private calculateVisibilityPercentage(
    intersectionHeight: number,
    elementHeight: number,
    viewportHeight: number,
  ): number {
    if (elementHeight > viewportHeight) {
      // For sections taller than viewport: percentage of viewport they occupy
      return intersectionHeight / viewportHeight;
    } else {
      // For sections shorter than viewport: percentage of section that's visible
      return intersectionHeight / elementHeight;
    }
  }

  private calculateVisibilityScore(visibilityPercentage: number): number {
    return Math.min(1, visibilityPercentage);
  }

  private calculateDirectionalScore(
    elementTop: number,
    elementBottom: number,
    viewport: ReturnType<typeof this.getViewportInfo>,
  ): number {
    if (this.scrollState.scrollDirection === "none") {
      return 0.5; // Neutral bias
    }

    const isEnteringFromBottom = elementTop > viewport.top && elementTop < viewport.bottom;
    const isEnteringFromTop = elementBottom > viewport.top && elementBottom < viewport.bottom;

    let score = 0.5;

    if (this.scrollState.scrollDirection === "down" && isEnteringFromBottom) {
      // Favor sections entering from bottom when scrolling down
      const distanceFromBottom = viewport.bottom - elementTop;
      score =
        0.5 +
        0.5 *
          this.config.directionalBiasStrength *
          Math.max(0, 1 - distanceFromBottom / viewport.height);
    } else if (this.scrollState.scrollDirection === "up" && isEnteringFromTop) {
      // Favor sections entering from top when scrolling up
      const distanceFromTop = elementBottom - viewport.top;
      score =
        0.5 +
        0.5 *
          this.config.directionalBiasStrength *
          Math.max(0, 1 - distanceFromTop / viewport.height);
    }

    return Math.min(1, score);
  }

  private calculateProximityScore(
    elementTop: number,
    elementBottom: number,
    viewport: ReturnType<typeof this.getViewportInfo>,
  ): number {
    const elementCenter = (elementTop + elementBottom) / 2;
    const distanceFromViewportCenter = Math.abs(elementCenter - viewport.center);
    const maxDistance = viewport.height;

    return Math.max(0, 1 - distanceFromViewportCenter / maxDistance);
  }

  private calculateStabilityScore(sectionId: string): number {
    return sectionId === this.currentActiveSection ? 1 : 0;
  }

  private handleBoundaryCases(
    metrics: SectionMetrics[],
    viewport: ReturnType<typeof this.getViewportInfo>,
  ): string | null {
    // At page top: favor first section
    if (viewport.top <= this.config.headerOffset + 50) {
      const firstSection = metrics.find((m) => m.id === this.sections[0]);
      if (firstSection && firstSection.visibilityPercentage > 0.1) {
        return firstSection.id;
      }
    }

    // At page bottom: favor last section
    const documentHeight = document.documentElement.scrollHeight;
    if (viewport.bottom >= documentHeight - 50) {
      const lastSection = metrics.find((m) => m.id === last(this.sections));
      if (lastSection && lastSection.visibilityPercentage > 0.1) {
        return lastSection.id;
      }
    }

    return null;
  }

  private selectWinnerByTiers(metrics: SectionMetrics[]): SectionMetrics | null {
    if (!metrics.length) return null;

    // Tier 1: Dominant Visibility (>50% viewport)
    const dominantSections = metrics.filter(
      (m) => m.visibilityPercentage > this.config.dominantVisibilityThreshold,
    );

    if (dominantSections.length) {
      return dominantSections?.[0] || null;
    }

    // Tier 2: Significant Visibility (20-50% viewport)
    const significantSections = metrics.filter(
      (m) => m.visibilityPercentage > this.config.significantVisibilityThreshold,
    );

    if (significantSections.length) {
      return significantSections?.[0] || null;
    }

    // Tier 3: Minimal Visibility (<20% viewport) - heavily favor scroll direction
    const minimalSections = metrics.filter(
      (m) => m.visibilityPercentage > this.config.minimalVisibilityThreshold,
    );

    if (minimalSections.length) {
      // Use lodash maxBy to find the best section
      return (
        maxBy(minimalSections, (section) => {
          return section.directionalScore * 2 + section.visibilityScore;
        }) || null
      );
    }

    return metrics?.[0] || null;
  }

  private shouldUpdateActiveSection(newSectionId: string): boolean {
    if (!this.currentActiveSection) return true;
    if (newSectionId === this.currentActiveSection) return false;

    // Apply hysteresis to prevent rapid switching
    const currentMetrics = this.sectionElements.get(this.currentActiveSection);
    const newMetrics = this.sectionElements.get(newSectionId);

    if (!currentMetrics || !newMetrics) return true;

    // Require significant difference to switch (hysteresis)
    return true; // Simplified - the scoring system should handle this
  }

  private setActiveSection(sectionId: string): void {
    if (this.currentActiveSection !== sectionId) {
      this.currentActiveSection = sectionId;
      activeSection.set(sectionId);
    }
  }

  public destroy(): void {
    // Cancel debounced functions
    this.debouncedCalculation.cancel();
    this.throttledScrollHandler.cancel();

    // Clear timers
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
    }

    // Call cleanup functions
    for (const cleanup of this.cleanupFunctions) cleanup();
    this.cleanupFunctions = [];

    // Clear references
    this.sectionElements.clear();
  }
}
