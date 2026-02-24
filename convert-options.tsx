"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const QUALITY = [
  { id: "standard", label: "Standard", description: "Good quality, smaller file" },
  { id: "high", label: "High Quality", description: "Best quality, larger file" },
];

export function ConvertOptions() {
  const [quality, setQuality] = useState("standard");

  return (
    <div className="w-full max-w-sm">
      <p className="mb-3 text-sm font-medium text-foreground">Output Quality</p>
      <div className="flex gap-2">
        {QUALITY.map((q) => (
          <button
            key={q.id}
            onClick={() => setQuality(q.id)}
            className={cn(
              "flex-1 rounded-xl border p-3 text-left transition-all",
              quality === q.id
                ? "border-primary bg-primary/5"
                : "border-border hover:border-primary/30"
            )}
          >
            <p className="text-sm font-medium text-foreground">{q.label}</p>
            <p className="text-xs text-muted-foreground">{q.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
