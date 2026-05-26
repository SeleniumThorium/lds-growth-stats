"use client";

import type { ReactNode } from "react";

type ContactMode = "email" | "text";

interface OpenContactButtonProps {
  mode: ContactMode;
  className?: string;
  children: ReactNode;
}

export function OpenContactButton({ mode, className, children }: OpenContactButtonProps) {
  function handleClick() {
    if (typeof window === "undefined") return;
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "center" });
    window.dispatchEvent(new CustomEvent(`contact-open-${mode}`));
  }

  return (
    <button type="button" onClick={handleClick} className={className}>
      {children}
    </button>
  );
}
