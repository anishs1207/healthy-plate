"use client";

import { useState, useEffect, useRef } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function BusinessMetrics() {
    const initialStats = [
        { label: "Total Users", base: 12000, color: "text-green-400" },
        { label: "MAU", base: 4800, color: "text-blue-400" },
        { label: "DAU", base: 1200, color: "text-purple-400" },
        { label: "Conversion Rate", base: 12, color: "text-green-400", percent: true },
        { label: "Revenue", base: 120000, color: "text-yellow-400", currency: true },
        { label: "Churn Rate", base: 2, color: "text-red-400", percent: true },
    ];

    const WINDOW = 30;
    const SPEED = 800;

    const [stats, setStats] = useState(
        initialStats.map(s => ({
            ...s,
            trend: Array.from({ length: WINDOW }, (_, i) => ({
                x: i,
                y: s.base + Math.random() * 500,
            })),
            expanded: false,
            tick: WINDOW,
        }))
    );

    const containerRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const interval = setInterval(() => {
            setStats(prev =>
                prev.map((s, idx) => {
                    const lastPoint = s.trend[s.trend.length - 1];
                    const newY =
                        lastPoint.y + (Math.random() - 0.5) * (s.percent ? 0.3 : s.currency ? 5000 : 1000);

                    const newPoint = { x: s.tick + 1, y: Math.max(newY, 0) };

                    const chart = containerRefs.current[idx];
                    if (chart) {
                        chart.style.transition = `transform ${SPEED}ms linear`;
                        chart.style.transform = `translateX(-0%)`;
                    }

                    setTimeout(() => {
                        const chart = containerRefs.current[idx];
                        if (chart) {
                            chart.style.transition = "none";
                            chart.style.transform = "translateX(0)";
                        }
                    }, SPEED);

                    return {
                        ...s,
                        trend: [...s.trend.slice(1), newPoint],
                        tick: s.tick + 1,
                    };
                })
            );
        }, SPEED);

        return () => clearInterval(interval);
    }, []);

    const formatValue = (stat: { percent?: boolean; currency?: boolean }, v: number) =>
        stat.percent ? `${v.toFixed(1)}%` : stat.currency ? `₹${v.toLocaleString()}` : Math.round(v);

    return (
        <div>
            <h2 className="text-lg font-semibold mb-4 text-neutral-300">Live Business Metrics</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {stats.map((s, i) => {
                    const latest = s.trend[s.trend.length - 1].y;
                    return (
                        <Card
                            key={i}
                            className="bg-neutral-800 border border-neutral-700 text-white"
                        >
                            <CardHeader
                                className="flex flex-row justify-between items-center cursor-pointer"
                                onClick={() =>
                                    setStats(prev =>
                                        prev.map((st, idx) =>
                                            idx === i ? { ...st, expanded: !st.expanded } : st
                                        )
                                    )
                                }
                            >
                                <CardTitle className="text-sm text-neutral-400">{s.label}</CardTitle>
                                {s.expanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                            </CardHeader>

                            <CardContent>
                                <p className="text-2xl font-bold">{formatValue(s, latest)}</p>

                                <div className="relative h-20 mt-3 overflow-hidden">
                                    <div ref={el => { containerRefs.current[i] = el; }} className="w-full h-full flex">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <LineChart data={s.trend}>
                                                <CartesianGrid strokeDasharray="3 3" stroke="#444" opacity={0.4} />
                                                <XAxis dataKey="x" stroke="#666" tick={{ fontSize: 10 }} />
                                                <YAxis stroke="#666" tick={{ fontSize: 10 }} domain={['auto', 'auto']} />
                                                <Tooltip
                                                    contentStyle={{
                                                        background: "#1f1f1f",
                                                        border: "1px solid #333",
                                                    }}
                                                    labelStyle={{ color: "#aaa" }}
                                                    itemStyle={{ color: "#fff" }}
                                                />
                                                <Line
                                                    type="monotone"
                                                    dataKey="y"
                                                    stroke="currentColor"
                                                    className={s.color}
                                                    strokeWidth={2}
                                                    dot={false}
                                                    isAnimationActive={false}
                                                />
                                            </LineChart>
                                        </ResponsiveContainer>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>
        </div>
    );
}
