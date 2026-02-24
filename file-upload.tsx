"use client";

import { useCallback, useState, useRef } from "react";
import { Upload, FileText, X, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface FileUploadProps {
  accept?: string;
  maxSizeMB?: number;
  onFileSelect?: (file: File) => void;
  label?: string;
}

type UploadState = "idle" | "dragging" | "uploading" | "complete" | "error";

export function FileUpload({
  accept = ".pdf",
  maxSizeMB = 50,
  onFileSelect,
  label = "Drop your PDF file here or click to browse",
}: FileUploadProps) {
  const [state, setState] = useState<UploadState>("idle");
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const simulateUpload = useCallback(
    (selectedFile: File) => {
      setFile(selectedFile);
      setState("uploading");
      setProgress(0);
      setError("");

      let p = 0;
      const interval = setInterval(() => {
        p += Math.random() * 25 + 10;
        if (p >= 100) {
          p = 100;
          clearInterval(interval);
          setState("complete");
          onFileSelect?.(selectedFile);
        }
        setProgress(Math.min(p, 100));
      }, 300);
    },
    [onFileSelect]
  );

  const handleFiles = useCallback(
    (files: FileList | null) => {
      if (!files || files.length === 0) return;
      const f = files[0];
      if (f.size > maxSizeMB * 1024 * 1024) {
        setError(`File size exceeds ${maxSizeMB}MB limit`);
        setState("error");
        return;
      }
      simulateUpload(f);
    },
    [maxSizeMB, simulateUpload]
  );

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setState("idle");
      handleFiles(e.dataTransfer.files);
    },
    [handleFiles]
  );

  const reset = () => {
    setState("idle");
    setFile(null);
    setProgress(0);
    setError("");
    if (inputRef.current) inputRef.current.value = "";
  };

  return (
    <div className="w-full">
      <div
        onDragOver={(e) => {
          e.preventDefault();
          setState("dragging");
        }}
        onDragLeave={() => setState(file ? "complete" : "idle")}
        onDrop={handleDrop}
        onClick={() => state === "idle" && inputRef.current?.click()}
        className={cn(
          "relative flex min-h-[200px] cursor-pointer flex-col items-center justify-center gap-4 rounded-2xl border-2 border-dashed p-8 text-center transition-all duration-200",
          state === "dragging" && "border-primary bg-primary/5 scale-[1.01]",
          state === "idle" && "border-border hover:border-primary/40 hover:bg-secondary/50",
          state === "uploading" && "border-primary/40 bg-primary/5 cursor-default",
          state === "complete" && "border-accent bg-accent/5 cursor-default",
          state === "error" && "border-destructive bg-destructive/5 cursor-default"
        )}
      >
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          onChange={(e) => handleFiles(e.target.files)}
          className="hidden"
          aria-label="File upload"
        />

        {state === "idle" || state === "dragging" ? (
          <>
            <div className="flex size-14 items-center justify-center rounded-2xl bg-primary/10">
              <Upload className="size-6 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">{label}</p>
              <p className="mt-1 text-xs text-muted-foreground">
                Max file size: {maxSizeMB}MB
              </p>
            </div>
          </>
        ) : null}

        {state === "uploading" && file && (
          <div className="flex w-full max-w-sm flex-col items-center gap-3">
            <FileText className="size-10 text-primary" />
            <p className="text-sm font-medium text-foreground truncate max-w-full">
              {file.name}
            </p>
            <Progress value={progress} className="w-full" />
            <p className="text-xs text-muted-foreground">
              Uploading... {Math.round(progress)}%
            </p>
          </div>
        )}

        {state === "complete" && file && (
          <div className="flex w-full max-w-sm flex-col items-center gap-3">
            <CheckCircle2 className="size-10 text-accent" />
            <p className="text-sm font-medium text-foreground truncate max-w-full">
              {file.name}
            </p>
            <p className="text-xs text-muted-foreground">
              {(file.size / 1024 / 1024).toFixed(2)} MB - Ready to process
            </p>
            <Button variant="ghost" size="sm" onClick={reset}>
              <X className="size-4" />
              Remove
            </Button>
          </div>
        )}

        {state === "error" && (
          <div className="flex flex-col items-center gap-3">
            <AlertCircle className="size-10 text-destructive" />
            <p className="text-sm font-medium text-destructive">{error}</p>
            <Button variant="ghost" size="sm" onClick={reset}>
              Try again
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
