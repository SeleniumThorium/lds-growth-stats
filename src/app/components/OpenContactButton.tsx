"use client";

import type { ReactNode } from "react";

interface OpenContactButtonProps {
  className?: string;
  children: ReactNode;
}

export function OpenContactButton({ className, children }: OpenContactButtonProps) {
  function handleClick() {
    if (typeof window === "undefined") return;
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "center" });
    window.dispatchEvent(new CustomEvent("contact-open-text"));
  }

  return (
    <button type="button" onClick={handleClick} className={className}>
      {children}
    </button>
  );
}
