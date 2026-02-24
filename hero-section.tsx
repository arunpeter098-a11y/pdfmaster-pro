"use client";

import { ArrowRight, FileText, Shield, Zap } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const STATS = [
  { icon: FileText, label: "60+ Tools", description: "PDF tools available" },
  { icon: Zap, label: "Fast", description: "Instant processing" },
  { icon: Shield, label: "Secure", description: "Files auto-deleted" },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b bg-card">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--color-primary)/0.06,transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-background px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="flex size-2 rounded-full bg-accent" />
            Free and open-source PDF toolkit
          </div>
          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            All-in-One Free
            <br />
            <span className="text-primary">PDF Toolkit</span>
          </h1>
          <p className="mt-5 text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            Convert, edit, compress, merge, split, and secure your PDF files
            online. 60+ professional tools, completely free.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button size="lg" className="w-full sm:w-auto gap-2 rounded-xl" asChild>
              <Link href="#tools">
                Explore Tools
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto rounded-xl"
              asChild
            >
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>

        <div className="mx-auto mt-14 grid max-w-2xl grid-cols-3 gap-6">
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-2 text-center">
              <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10">
                <stat.icon className="size-5 text-primary" />
              </div>
              <p className="text-sm font-semibold text-foreground">{stat.label}</p>
              <p className="text-xs text-muted-foreground">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
