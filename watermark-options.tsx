"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

export function WatermarkOptions() {
  const [text, setText] = useState("CONFIDENTIAL");
  const [opacity, setOpacity] = useState([40]);

  return (
    <div className="w-full max-w-sm flex flex-col gap-4">
      <div>
        <Label htmlFor="wm-text" className="text-sm font-medium">Watermark Text</Label>
        <Input
          id="wm-text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="mt-1.5 rounded-xl"
          placeholder="Enter watermark text"
        />
      </div>
      <div>
        <Label className="text-sm font-medium">Opacity: {opacity[0]}%</Label>
        <Slider
          value={opacity}
          onValueChange={setOpacity}
          min={10}
          max={100}
          step={5}
          className="mt-2"
        />
      </div>
      <div className="rounded-xl border bg-secondary/30 p-4 text-center">
        <p
          className="text-lg font-bold text-muted-foreground"
          style={{ opacity: opacity[0] / 100 }}
        >
          {text || "Preview"}
        </p>
        <p className="mt-1 text-xs text-muted-foreground">Watermark preview</p>
      </div>
    </div>
  );
}
