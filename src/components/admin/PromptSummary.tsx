"use client";

import { useState, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { TrendingUp, MessageCircle, ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function LiveTrendingTopics() {
    const initialTopics = [
        { topic: "Connecting Gmail & Email Setup", users: 420 },
        { topic: "Sending Automated Messages", users: 310 },
        { topic: "Finance / Expense Queries", users: 260 },
        { topic: "Lead Outreach & CRM Workflows", users: 150 },
        { topic: "Task Automation & Scripting", users: 80 },
        { topic: "Invoice Categorization", users: 70 },
        { topic: "Bank Sync Issues", users: 65 },
        { topic: "Campaign Personalization", users: 55 },
        { topic: "Uploading Docs & Parsing PDFs", users: 50 },
        { topic: "WhatsApp + Email Multi-Channel Sends", users: 46 },
    ];

    const [topics, setTopics] = useState(initialTopics);

    // Live auto update every 2s
    useEffect(() => {
        const interval = setInterval(() => {
            setTopics(prev => {
                const updated = prev.map(t => ({
                    ...t,
                    users: Math.max(
                        t.users + (Math.random() > 0.5 ? 1 : -1) * Math.floor(Math.random() * 15),
                        1
                    )
                }));

                // Sort live by rank
                return [...updated].sort((a, b) => b.users - a.users);
            });
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    const totalUsers = topics.reduce((a, b) => a + b.users, 0);

    return (
        <Card className="bg-neutral-900 border-neutral-800 shadow-xl">
            <CardHeader>
                <CardTitle className="text-neutral-200 font-semibold flex items-center gap-2">
                    <MessageCircle className="text-emerald-400" size={18} />
                    Live Top 10 Agent Use Cases
                </CardTitle>
                <p className="text-sm text-neutral-400">
                    What people are asking the AI right now & ranking shifts
                </p>
            </CardHeader>

            <CardContent className="space-y-4 pt-2">
                <AnimatePresence>
                    {topics.map((t, i) => {
                        const percent = Math.round((t.users / totalUsers) * 100);

                        return (
                            <motion.div
                                key={t.topic}
                                layout
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                transition={{ type: "spring", stiffness: 120, damping: 12 }}
                                className="space-y-1 p-2 rounded-lg bg-neutral-800/40 border border-neutral-700/30"
                            >
                                <div className="flex justify-between text-sm text-neutral-300">
                                    <span className="flex items-center gap-2">
                                        <span className="font-medium text-neutral-100">{i + 1}. {t.topic}</span>
                                        {i < 3 && <TrendingUp size={14} className="text-green-400" />}
                                    </span>

                                    <span className="flex items-center gap-1 text-neutral-400">
                                        {t.users} users ({percent}%)
                                        {i < 3 && <ArrowUp size={12} className="text-emerald-400" />}
                                    </span>
                                </div>

                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${percent}%` }}
                                    transition={{ duration: 0.4 }}
                                    className="h-2 rounded-full bg-gradient-to-r from-emerald-500 via-green-400 to-lime-300 shadow-[0_0_10px_rgba(34,197,94,0.4)]"
                                />
                            </motion.div>
                        );
                    })}
                </AnimatePresence>

                <p className="text-xs text-neutral-500 pt-2">
                    Total Active Users: {totalUsers}
                </p>
            </CardContent>
        </Card>
    );
}
