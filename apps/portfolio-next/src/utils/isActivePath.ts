import isRelativeUrl from "is-relative-url";

export const isDOM = () => {
  return typeof window !== "undefined" && window.document && window.document.documentElement;
};

export const isActivePath = (path: string, currentPath?: string): boolean => {
  if (!path) return false;

  if (isDOM()) {
    currentPath ||= window.location.pathname;
  }

  if (!currentPath) return false;

  if (!isRelativeUrl(path)) {
    path = new URL(path).pathname;
  }

  if (!isRelativeUrl(currentPath)) {
    currentPath = new URL(currentPath).pathname;
  }

  return path === currentPath;
};
