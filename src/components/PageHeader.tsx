import type { ReactNode } from "react";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

export default function PageHeader({ eyebrow, title, subtitle, children }: PageHeaderProps) {
  return (
    <div className="mx-auto max-w-6xl px-5 pb-8 pt-14">
      {eyebrow && (
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-teal-300/80">
          {eyebrow}
        </p>
      )}
      <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h1>
      {subtitle && <p className="mt-4 max-w-2xl text-base text-slate-400">{subtitle}</p>}
      {children}
    </div>
  );
}
