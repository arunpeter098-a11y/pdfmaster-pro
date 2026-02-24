import Link from "next/link";
import type { PDFTool, ToolCategory } from "@/lib/tools-data";
import { ToolIcon } from "@/components/tool-icon";
import { Badge } from "@/components/ui/badge";

const categoryColors: Record<ToolCategory, string> = {
  conversion: "bg-primary/10 text-primary",
  editing: "bg-accent/10 text-accent",
  security: "bg-chart-3/15 text-chart-3",
  organizing: "bg-chart-4/15 text-chart-4",
  advanced: "bg-chart-5/15 text-chart-5",
};

export function ToolCard({ tool }: { tool: PDFTool }) {
  return (
    <Link href={`/tools/${tool.slug}`} className="group block">
      <div className="relative flex flex-col gap-3 rounded-2xl border bg-card p-5 shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 hover:border-primary/30">
        {tool.isPremium && (
          <Badge
            variant="secondary"
            className="absolute right-4 top-4 border-0 bg-primary/10 text-xs font-medium text-primary"
          >
            PRO
          </Badge>
        )}
        <div className={`flex size-11 items-center justify-center rounded-xl ${categoryColors[tool.category]}`}>
          <ToolIcon name={tool.icon} className="size-5" />
        </div>
        <div>
          <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
            {tool.name}
          </h3>
          <p className="mt-1 text-xs leading-relaxed text-muted-foreground line-clamp-2">
            {tool.description}
          </p>
        </div>
      </div>
    </Link>
  );
}
