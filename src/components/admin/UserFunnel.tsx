"use client";

import { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
    TrendingUp,
    Users,
    MousePointerClick,
    CreditCard,
    MessageSquarePlus,
    Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import clsx from "clsx";

export default function FunnelTraffic() {
    const baseData = [
        { step: "Landing Page", value: 12000, icon: MousePointerClick },
        { step: "Sign Up", value: 4800, icon: Users },
        { step: "Dashboard Reached", value: 4100, icon: TrendingUp },
        { step: "Bought Credits", value: 1750, icon: CreditCard },
        { step: "First Prompt", value: 1500, icon: MessageSquarePlus },
        { step: "Created Conversation", value: 1280, icon: Sparkles },
    ];

    const [data, setData] = useState(baseData);

    useEffect(() => {
        const interval = setInterval(() => {
            setData((prev) =>
                prev.map((item, _i) => {
                    const random = (Math.random() - 0.5) * 300;
                    const newVal = Math.max(item.value + random, 0);
                    return { ...item, value: Math.round(newVal) };
                })
            );
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    const max = data[0].value;

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* FUNNEL SIDE */}
            <Card className="bg-neutral-900 border-neutral-800">
                <CardHeader>
                    <CardTitle className="text-neutral-200 font-semibold">Conversion Funnel</CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                    <div className="space-y-4">

                        {data.map((item, i) => {
                            const width = (item.value / max) * 100;
                            const Icon = item.icon;

                            return (
                                <div key={i} className="space-y-1">
                                    <div className="flex justify-between items-center text-neutral-300 text-xs">
                                        <div className="flex items-center gap-2">
                                            <Icon size={14} className="text-neutral-400" />
                                            {item.step}
                                        </div>
                                        <span className="font-medium">
                                            {item.value.toLocaleString()}
                                        </span>
                                    </div>

                                    <motion.div
                                        initial={{ scaleX: 0 }}
                                        animate={{ scaleX: 1 }}
                                        transition={{ duration: 0.5 }}
                                        className="origin-left"
                                    >
                                        <div
                                            className={clsx(
                                                "h-2 rounded-full transition-all",
                                                "bg-gradient-to-r from-emerald-500 via-green-400 to-lime-300 shadow-[0_0_12px_rgba(34,197,94,0.5)]"
                                            )}
                                            style={{ width: `${width}%` }}
                                        />
                                    </motion.div>
                                </div>
                            );
                        })}

                    </div>
                </CardContent>
            </Card>

            {/* LIVE NUMBERS SIDE */}
            <Card className="bg-neutral-900 border-neutral-800">
                <CardHeader>
                    <CardTitle className="text-neutral-200 font-semibold">
                        Live Performance Metrics
                    </CardTitle>
                </CardHeader>

                <CardContent className="text-neutral-300 space-y-3">
                    {data.map((d, i) => (
                        <div key={i} className="flex justify-between text-sm">
                            <span>{d.step}</span>
                            <motion.span
                                key={d.value}
                                initial={{ opacity: 0.4, y: 2 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                {d.value.toLocaleString()}
                            </motion.span>
                        </div>
                    ))}

                    <p className="text-neutral-500 text-xs pt-1">
                        🔄 Auto-refreshing every 2s
                    </p>
                </CardContent>
            </Card>
        </div>
    );
}
