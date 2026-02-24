"use client";

import { useState, useCallback } from "react";
import { Download, RotateCcw, FileText, CheckCircle2 } from "lucide-react";
import { FileUpload } from "@/components/file-upload";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";
import type { PDFTool } from "@/lib/tools-data";

type ProcessState = "upload" | "options" | "processing" | "complete";

interface ToolProcessorProps {
  tool: PDFTool;
  options?: React.ReactNode;
}

export function ToolProcessor({ tool, options }: ToolProcessorProps) {
  const [state, setState] = useState<ProcessState>("upload");
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState(0);

  const hasOptions = !!options;

  const handleFileSelect = useCallback((f: File) => {
    setFile(f);
    if (hasOptions) {
      setState("options");
    } else {
      setState("processing");
      setProgress(0);
      let p = 0;
      const interval = setInterval(() => {
        p += Math.random() * 15 + 5;
        if (p >= 100) {
          p = 100;
          clearInterval(interval);
          setState("complete");
          toast.success("Processing complete! Your file is ready to download.");
        }
        setProgress(Math.min(p, 100));
      }, 400);
    }
  }, [hasOptions]);

  const simulateProcessing = useCallback(() => {
    setState("processing");
    setProgress(0);
    let p = 0;
    const interval = setInterval(() => {
      p += Math.random() * 15 + 5;
      if (p >= 100) {
        p = 100;
        clearInterval(interval);
        setState("complete");
        toast.success("Processing complete! Your file is ready to download.");
      }
      setProgress(Math.min(p, 100));
    }, 400);
  }, []);

  const handleProcess = () => {
    simulateProcessing();
  };

  const handleDownload = () => {
    toast.success("Download started!");
  };

  const reset = () => {
    setState("upload");
    setFile(null);
    setProgress(0);
  };

  return (
    <div className="mx-auto w-full max-w-2xl">
      {state === "upload" && (
        <FileUpload
          accept={tool.category === "conversion" && tool.slug.startsWith("word")
            ? ".doc,.docx"
            : tool.category === "conversion" && tool.slug.startsWith("jpg")
            ? ".jpg,.jpeg"
            : tool.category === "conversion" && tool.slug.startsWith("png")
            ? ".png"
            : tool.category === "conversion" && tool.slug.startsWith("ppt")
            ? ".ppt,.pptx"
            : tool.category === "conversion" && tool.slug.startsWith("excel")
            ? ".xls,.xlsx"
            : ".pdf"}
          onFileSelect={handleFileSelect}
          label={`Drop your file here to ${tool.name.toLowerCase()}`}
        />
      )}

      {state === "options" && file && (
        <div className="flex flex-col items-center gap-6 rounded-2xl border bg-card p-8">
          <div className="flex items-center gap-3">
            <FileText className="size-8 text-primary" />
            <div>
              <p className="text-sm font-medium text-foreground">{file.name}</p>
              <p className="text-xs text-muted-foreground">
                {(file.size / 1024 / 1024).toFixed(2)} MB
              </p>
            </div>
          </div>
          {options}
          <Button onClick={handleProcess} className="w-full max-w-xs rounded-xl">
            Process File
          </Button>
        </div>
      )}

      {state === "processing" && (
        <div className="flex flex-col items-center gap-6 rounded-2xl border bg-card p-8">
          <div className="flex size-16 items-center justify-center rounded-2xl bg-primary/10">
            <FileText className="size-8 text-primary animate-pulse" />
          </div>
          <div className="w-full max-w-sm text-center">
            <p className="text-sm font-medium text-foreground">
              Processing your file...
            </p>
            <Progress value={progress} className="mt-4" />
            <p className="mt-2 text-xs text-muted-foreground">
              {Math.round(progress)}% complete
            </p>
          </div>
        </div>
      )}

      {state === "complete" && file && (
        <div className="flex flex-col items-center gap-6 rounded-2xl border bg-card p-8">
          <div className="flex size-16 items-center justify-center rounded-2xl bg-accent/10">
            <CheckCircle2 className="size-8 text-accent" />
          </div>
          <div className="text-center">
            <p className="text-lg font-semibold text-foreground">
              Processing Complete
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Your file has been processed successfully.
            </p>
          </div>
          <div className="rounded-xl border bg-secondary/50 px-5 py-3">
            <p className="text-xs text-muted-foreground">Output</p>
            <p className="text-sm font-medium text-foreground">
              {file.name.replace(/\.[^.]+$/, "")}_processed.pdf
            </p>
          </div>
          <div className="flex gap-3">
            <Button onClick={handleDownload} className="gap-2 rounded-xl">
              <Download className="size-4" />
              Download
            </Button>
            <Button variant="outline" onClick={reset} className="gap-2 rounded-xl">
              <RotateCcw className="size-4" />
              Process Another
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
