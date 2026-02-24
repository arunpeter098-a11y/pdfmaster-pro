import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const TOP_TOOLS = [
  { name: "Merge PDF", uses: 42890, trend: "+15%" },
  { name: "Compress PDF", uses: 38210, trend: "+22%" },
  { name: "PDF to Word", uses: 31450, trend: "+8%" },
  { name: "Split PDF", uses: 18920, trend: "+11%" },
  { name: "JPG to PDF", uses: 14300, trend: "+5%" },
  { name: "Add Watermark", uses: 9870, trend: "+18%" },
  { name: "Lock PDF", uses: 8230, trend: "+3%" },
];

export function AdminToolsTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">Top Tools</CardTitle>
        <CardDescription>Most used tools this month</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-3">
          {TOP_TOOLS.map((tool, i) => (
            <div
              key={tool.name}
              className="flex items-center justify-between rounded-xl bg-secondary/50 px-3 py-2.5"
            >
              <div className="flex items-center gap-3">
                <span className="flex size-6 items-center justify-center rounded-md bg-primary/10 text-xs font-bold text-primary">
                  {i + 1}
                </span>
                <span className="text-sm font-medium text-foreground">{tool.name}</span>
              </div>
              <div className="text-right">
                <p className="text-xs font-semibold text-foreground">
                  {tool.uses.toLocaleString()}
                </p>
                <p className="text-xs text-accent">{tool.trend}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
