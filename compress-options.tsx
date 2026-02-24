"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const LEVELS = [
  { id: "low", label: "Low", description: "Minimal compression, best quality", reduction: "~20%" },
  { id: "medium", label: "Medium", description: "Balanced quality and size", reduction: "~50%" },
  { id: "high", label: "High", description: "Maximum compression, smaller file", reduction: "~75%" },
];

export function CompressOptions() {
  const [level, setLevel] = useState("medium");

  return (
    <div className="w-full max-w-sm">
      <p className="mb-3 text-sm font-medium text-foreground">Compression Level</p>
      <div className="flex flex-col gap-2">
        {LEVELS.map((l) => (
          <button
            key={l.id}
            onClick={() => setLevel(l.id)}
            className={cn(
              "flex items-center justify-between rounded-xl border p-3 text-left transition-all",
              level === l.id
                ? "border-primary bg-primary/5"
                : "border-border hover:border-primary/30"
            )}
          >
            <div>
              <p className="text-sm font-medium text-foreground">{l.label}</p>
              <p className="text-xs text-muted-foreground">{l.description}</p>
            </div>
            <span className="text-xs font-semibold text-primary">{l.reduction}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
