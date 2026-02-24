"use client";

import {
  Zap,
  Shield,
  Globe,
  Lock,
  CloudOff,
  Layers,
} from "lucide-react";

const FEATURES = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Process your files in seconds with our optimized cloud infrastructure.",
  },
  {
    icon: Shield,
    title: "Bank-Grade Security",
    description:
      "256-bit SSL encryption. Your files are auto-deleted after processing.",
  },
  {
    icon: Globe,
    title: "Works Everywhere",
    description:
      "No installation needed. Works on any device with a web browser.",
  },
  {
    icon: Lock,
    title: "Privacy First",
    description:
      "We never read, store, or share your documents. Period.",
  },
  {
    icon: CloudOff,
    title: "Offline Ready",
    description:
      "Download our desktop app for offline processing of sensitive files.",
  },
  {
    icon: Layers,
    title: "Batch Processing",
    description:
      "Process multiple files at once with our premium batch tools.",
  },
];

export function FeaturesSection() {
  return (
    <section className="border-b bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Why Choose PDFMaster Pro?
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Trusted by over 2 million users worldwide
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="flex gap-4 rounded-2xl border bg-background p-5 transition-all hover:shadow-sm"
            >
              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <feature.icon className="size-5 text-primary" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
