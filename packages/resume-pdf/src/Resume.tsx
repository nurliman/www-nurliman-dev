import "./Resume.css";
import { certificates, education, experiences, knowledge, personalInfo } from "@nurliman.dev/data";
import { clsx } from "clsx";
import { Github, Globe, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import type { ComponentProps } from "react";
import snarkdown from "snarkdown";

export default function Resume({ className, ...props }: ComponentProps<"div"> = {}) {
  return (
    <div className={clsx("bg-white font-serif leading-relaxed text-black", className)} {...props}>
      {/* Header */}
      <div className="mb-6 text-center">
        <h1 className="mb-3 text-3xl font-bold text-gray-900">{personalInfo.name}</h1>
        <div className="mb-3 text-lg font-medium text-gray-700">
          Full-Stack Developer & DevOps Engineer
        </div>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
          <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-1">
            <Mail className="size-4" />
            {personalInfo.email}
          </a>
          <a
            href={personalInfo.whatsappLink}
            className="flex items-center gap-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Phone className="size-4" />
            {personalInfo.phoneFormatted}
          </a>
          <div className="flex items-center gap-1">
            <MapPin className="size-4" />
            {personalInfo.residence}
          </div>
          <a
            href={personalInfo.websiteLink}
            className="flex items-center gap-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Globe className="size-4" />
            nurliman.dev
          </a>
          <a
            href={personalInfo.githubLink}
            className="flex items-center gap-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="size-4" />
            github.com/nurliman
          </a>
          <a
            href={personalInfo.linkedinLink}
            className="flex items-center gap-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="size-4" />
            linkedin.com/in/nurliman
          </a>
        </div>
      </div>

      {/* Summary */}
      <section className="mb-6">
        <h2 className="mb-3 border-b border-gray-200 pb-1 text-lg font-semibold text-gray-900">
          SUMMARY
        </h2>
        <p className="leading-relaxed text-gray-700">
          Results-driven software engineer with 5+ years of experience building scalable web
          applications. Expert in JavaScript/TypeScript, cloud infrastructure, and modern
          development practices. Specialize in creating high-performance, user-centric applications
          with meticulous attention to detail. Proven track record of optimizing software delivery
          pipelines, implementing scalable solutions, and fostering cross-functional collaboration.
          Proactive problem-solver who stays current with emerging technologies and seeks
          challenging opportunities to leverage technical expertise in innovative projects.
        </p>
      </section>

      {/* TODO: Replace hardcoded skills with dynamic data */}
      {/* Skills (Hardcoded) */}
      <section className="mb-6">
        <h2 className="mb-3 border-b border-gray-200 pb-1 text-lg font-semibold text-gray-900">
          SKILLS
        </h2>
        <div className="space-y-4">
          {/* Core Programming & Development */}
          <div>
            <h3 className="mb-1 font-medium text-gray-800">Programming Languages & Frameworks</h3>
            <div className="text-sm leading-relaxed text-gray-600">
              {formatSkills(["JavaScript/TypeScript", "Node.js", "React", "Next.js", "Go", "Rust"])}
            </div>
          </div>

          {/* DevOps & Infrastructure */}
          <div>
            <h3 className="mb-1 font-medium text-gray-800">DevOps & Infrastructure</h3>
            <div className="text-sm leading-relaxed text-gray-600">
              {formatSkills([
                "Docker",
                "Kubernetes",
                "Linux",
                "GitHub Actions",
                "Google Cloud Platform",
                "Nginx",
                "CI/CD",
              ])}
            </div>
          </div>

          {/* Frontend Technologies */}
          <div>
            <h3 className="mb-1 font-medium text-gray-800">Frontend Technologies</h3>
            <div className="text-sm leading-relaxed text-gray-600">
              {formatSkills([
                "React",
                "Svelte/SvelteKit",
                "Astro",
                "Solid.js",
                "TanStack Query",
                "shadcn/ui",
              ])}
            </div>
          </div>

          {/* Mobile & Desktop */}
          <div>
            <h3 className="mb-1 font-medium text-gray-800">Mobile & Desktop Development</h3>
            <div className="text-sm leading-relaxed text-gray-600">
              {formatSkills(["React Native", "Expo", "Electron"])}
            </div>
          </div>

          {/* APIs & Databases */}
          <div>
            <h3 className="mb-1 font-medium text-gray-800">APIs & Databases</h3>
            <div className="text-sm leading-relaxed text-gray-600">
              {formatSkills([
                "REST API",
                "OpenAPI",
                "GraphQL",
                "PostgreSQL",
                "MySQL",
                "SQLite",
                "Elasticsearch",
                "Meilisearch",
              ])}
            </div>
          </div>

          {/* Development Tools & Design */}
          <div>
            <h3 className="mb-1 font-medium text-gray-800">Development Tools & Design</h3>
            <div className="text-sm leading-relaxed text-gray-600">
              {formatSkills([
                "Git/GitHub",
                "Figma",
                "Playwright",
                "Vitest",
                "Sentry",
                "Adobe Illustrator",
                "Turbo",
              ])}
            </div>
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      {experiences?.length ? (
        <section className="mb-6">
          <h2 className="mb-3 border-b border-gray-200 pb-1 text-lg font-semibold text-gray-900">
            PROFESSIONAL EXPERIENCE
          </h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index}>
                <div className="mb-2 flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900">{exp.title}</h3>
                    <p className="text-gray-700">{exp.company}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-600">{exp.period}</p>
                </div>
                <div className="markdown leading-relaxed text-gray-700">
                  {renderMarkdown(exp.description)}
                </div>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {/* Education */}
      {education?.length ? (
        <section className="mb-6">
          <h2 className="mb-3 border-b border-gray-200 pb-1 text-lg font-semibold text-gray-900">
            EDUCATION
          </h2>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <div key={index}>
                <div className="mb-2 flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900">{edu.field}</h3>
                    <p className="text-gray-700">{edu.school}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-600">{edu.period}</p>
                </div>
                <div className="markdown leading-relaxed text-gray-700">
                  {renderMarkdown(edu.description)}
                </div>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {/* Knowledge Areas */}
      {knowledge?.length ? (
        <section className="mb-6">
          <h2 className="mb-3 border-b border-gray-200 pb-1 text-lg font-semibold text-gray-900">
            KNOWLEDGE AREAS
          </h2>
          <p className="leading-relaxed text-gray-700">{knowledge.join(" • ")}</p>
        </section>
      ) : null}

      {/* Certifications */}
      {certificates?.length ? (
        <section className="mb-6">
          <h2 className="mb-3 border-b border-gray-200 pb-1 text-lg font-semibold text-gray-900">
            CERTIFICATIONS
          </h2>
          <div className="space-y-4">
            {certificates.map((cert, index) => (
              <div key={index} className="flex items-start justify-between">
                <div>
                  <span className="font-medium text-gray-900">{cert.name}</span>
                  <span className="text-gray-600"> • {cert.organization.name}</span>
                  <div className="text-sm text-gray-500">Credential ID: {cert.credential.id}</div>
                </div>
                <span className="text-sm text-gray-600">{cert.date}</span>
              </div>
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}

function formatSkills(skills: string[]) {
  return skills.join(" • ");
}

/**
 * Renders markdown text and replaces <br/> tags with stylable React elements.
 *
 * Why we do this:
 * - Standard <br/> tags cannot be styled for height/spacing
 * - We need consistent, controllable line breaks for PDF generation
 * - This approach converts HTML line breaks into React divs with custom styling
 *
 * @param text - Markdown text that may contain line breaks
 * @returns Array of React elements with stylable line breaks
 */
function renderMarkdown(text: string) {
  const html = snarkdown(text);

  // Replace <br> and <br/> tags with unique placeholder markers
  // This allows us to safely split the HTML without breaking other tags
  const processed = html.replace(/<br\s*\/?>/gi, "|||LINEBREAK|||");

  // Split by placeholder to separate HTML content from line break positions
  const parts = processed.split("|||LINEBREAK|||");

  return parts.map((part, index) => (
    <span key={index}>
      {/* Insert stylable line break div instead of <br/> tag */}
      {index > 0 ? <div className="block h-2 w-full" /> : null}
      <span dangerouslySetInnerHTML={{ __html: part }} />
    </span>
  ));
}
