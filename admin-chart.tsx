"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const DATA = [
  { name: "Jan", conversions: 4200, users: 1800 },
  { name: "Feb", conversions: 5800, users: 2100 },
  { name: "Mar", conversions: 7200, users: 2800 },
  { name: "Apr", conversions: 8900, users: 3200 },
  { name: "May", conversions: 11200, users: 3800 },
  { name: "Jun", conversions: 14500, users: 4200 },
  { name: "Jul", conversions: 16800, users: 4500 },
  { name: "Aug", conversions: 18200, users: 4800 },
];

export function AdminChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">Usage Overview</CardTitle>
        <CardDescription>Conversions and active users over time</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={DATA} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorConversions" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="oklch(0.55 0.2 255)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="oklch(0.55 0.2 255)" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="oklch(0.65 0.18 170)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="oklch(0.65 0.18 170)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
              <XAxis
                dataKey="name"
                className="text-xs fill-muted-foreground"
                tick={{ fontSize: 12 }}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                className="text-xs fill-muted-foreground"
                tick={{ fontSize: 12 }}
                tickLine={false}
                axisLine={false}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "oklch(0.17 0.02 260)",
                  border: "1px solid oklch(0.25 0.02 260)",
                  borderRadius: "0.75rem",
                  color: "oklch(0.95 0.01 250)",
                  fontSize: "0.75rem",
                }}
              />
              <Area
                type="monotone"
                dataKey="conversions"
                stroke="oklch(0.55 0.2 255)"
                fillOpacity={1}
                fill="url(#colorConversions)"
                strokeWidth={2}
              />
              <Area
                type="monotone"
                dataKey="users"
                stroke="oklch(0.65 0.18 170)"
                fillOpacity={1}
                fill="url(#colorUsers)"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
