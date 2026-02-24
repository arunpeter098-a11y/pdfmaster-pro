"use client";

import { Plus, GripVertical } from "lucide-react";
import { Button } from "@/components/ui/button";

export function MergeOptions() {
  return (
    <div className="w-full max-w-sm">
      <p className="mb-3 text-sm font-medium text-foreground">Files to merge</p>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 rounded-xl border bg-secondary/30 p-3">
          <GripVertical className="size-4 text-muted-foreground" />
          <span className="flex-1 text-sm text-foreground">document.pdf</span>
          <span className="text-xs text-muted-foreground">Uploaded</span>
        </div>
        <Button variant="outline" className="gap-2 rounded-xl border-dashed" size="sm">
          <Plus className="size-4" />
          Add more files
        </Button>
      </div>
      <p className="mt-3 text-xs text-muted-foreground">
        Drag to reorder. Files will be merged in the order shown.
      </p>
    </div>
  );
}
