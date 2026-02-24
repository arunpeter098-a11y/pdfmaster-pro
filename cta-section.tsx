import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="border-t bg-card">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Ready to Master Your PDFs?
          </h2>
          <p className="mt-3 text-pretty text-sm text-muted-foreground md:text-base">
            Join over 2 million professionals who trust PDFMaster Pro for their
            document needs. Start for free, no credit card required.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button size="lg" className="w-full gap-2 rounded-xl sm:w-auto" asChild>
              <Link href="/#tools">
                Get Started Free
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full rounded-xl sm:w-auto"
              asChild
            >
              <Link href="/pricing">See Plans</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
