"use client";

interface DimensionBarProps {
  label: string;
  value: number; // -1 to 1 or 0 to 1
  minLabel?: string;
  maxLabel?: string;
  range?: "bipolar" | "unipolar";
}

export function DimensionBar({
  label,
  value,
  minLabel,
  maxLabel,
  range = "bipolar",
}: DimensionBarProps) {
  // Convert value to percentage position on the bar
  const pct = range === "bipolar" ? ((value + 1) / 2) * 100 : value * 100;

  return (
    <div className="space-y-1">
      <div className="flex justify-between text-xs text-muted">
        <span>{minLabel || (range === "bipolar" ? "-1" : "0")}</span>
        <span className="font-medium text-foreground">{label}</span>
        <span>{maxLabel || "1"}</span>
      </div>
      <div className="relative h-2 rounded-full bg-foreground/10">
        {range === "bipolar" && (
          <div className="absolute left-1/2 top-0 h-full w-px bg-foreground/20" />
        )}
        <div
          className="absolute top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-accent shadow-sm"
          style={{ left: `calc(${pct}% - 6px)` }}
        />
      </div>
    </div>
  );
}
