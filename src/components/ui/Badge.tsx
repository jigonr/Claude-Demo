"use client";

const typeColors: Record<string, string> = {
  contradiction: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300",
  assumption: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
  surprise: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300",
  reframe: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
  default: "bg-foreground/5 text-muted",
};

interface BadgeProps {
  label: string;
  type?: string;
  className?: string;
}

export function Badge({ label, type, className = "" }: BadgeProps) {
  const color = (type && typeColors[type]) || typeColors.default;
  return (
    <span
      className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${color} ${className}`}
    >
      {label}
    </span>
  );
}
