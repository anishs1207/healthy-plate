"use client";

import { useState, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

import {
    MessageSquare,
    ThumbsUp,
    ThumbsDown,
    Star,
    StarOff,
    Trash,
    Eye,
    EyeOff,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function UserFeedbackStream() {
    const initialFeedback = [
        {
            id: 1,
            text: "Connecting Gmail was super smooth!",
            tag: "Integrations",
            sentiment: "positive",
            seenBy: ["john@gmail.com", "team@admin.com"],
            isFav: false,
        },
        {
            id: 2,
            text: "Would love better financial data export options.",
            tag: "Finance tools",
            sentiment: "neutral",
            seenBy: ["finance@admin.com"],
            isFav: true,
        },
        {
            id: 3,
            text: "Sending emails through the agent feels magical.",
            tag: "Messaging",
            sentiment: "positive",
            seenBy: ["ops@admin.com", "ceo@company.com"],
            isFav: false,
        },
    ];

    const [feedback, setFeedback] = useState(initialFeedback);

    // Simulate live incoming feedback
    useEffect(() => {
        const interval = setInterval(() => {
            const samples = [
                {
                    text: "Love the automated reminders feature.",
                    tag: "Automation",
                    sentiment: "positive",
                },
                {
                    text: "More insights for banking data would be great.",
                    tag: "Finance tools",
                    sentiment: "neutral",
                },
                {
                    text: "Wish there was support for Outlook calendar sync.",
                    tag: "Integrations",
                    sentiment: "negative",
                },
                {
                    text: "Agent replies feel super personalized 🔥",
                    tag: "AI Personalization",
                    sentiment: "positive",
                },
            ];

            const sample = samples[Math.floor(Math.random() * samples.length)];
            const newEntry = {
                id: Date.now(),
                seenBy: [],
                isFav: false,
                ...sample,
            };

            setFeedback((prev) => [newEntry, ...prev]);
        }, 6000);

        return () => clearInterval(interval);
    }, []);

    const toggleFav = (id: number) => {
        setFeedback((prev) =>
            prev.map((f) => (f.id === id ? { ...f, isFav: !f.isFav } : f))
        );
    };

    const deleteFeedback = (id: number) => {
        setFeedback((prev) => prev.filter((f) => f.id !== id));
    };

    return (
        <Card className="bg-neutral-900 border-neutral-800 shadow-xl">
            <CardHeader>
                <CardTitle className="flex items-center gap-2 text-neutral-200 font-semibold">
                    <MessageSquare className="text-blue-400" size={18} />
                    Live User Feedback Stream
                </CardTitle>
                <p className="text-sm text-neutral-400">
                    Reactions, favorites, seen-by, and moderation tools.
                </p>
            </CardHeader>

            <CardContent>
                <ScrollArea className="h-72 pr-2">
                    <div className="space-y-3">
                        <AnimatePresence>
                            {feedback.map((f) => (
                                <motion.div
                                    key={f.id}
                                    initial={{ opacity: 0, y: 6 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.3 }}
                                    className="bg-neutral-800/60 border border-neutral-700 rounded-xl p-3"
                                >
                                    {/* Header Section */}
                                    <div className="flex justify-between items-start">
                                        <Badge className="text-xs bg-neutral-700 text-neutral-300">
                                            {f.tag}
                                        </Badge>

                                        <div className="flex items-center gap-2">
                                            {/* Sentiment Icons */}
                                            {f.sentiment === "positive" && (
                                                <ThumbsUp size={15} className="text-green-400" />
                                            )}
                                            {f.sentiment === "negative" && (
                                                <ThumbsDown size={15} className="text-red-400" />
                                            )}

                                            {/* Favorite Button */}
                                            <button onClick={() => toggleFav(f.id)}>
                                                {f.isFav ? (
                                                    <Star size={16} className="text-yellow-400" />
                                                ) : (
                                                    <StarOff size={16} className="text-neutral-500" />
                                                )}
                                            </button>

                                            {/* Delete */}
                                            <button onClick={() => deleteFeedback(f.id)}>
                                                <Trash size={15} className="text-red-500 hover:text-red-400" />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Feedback text */}
                                    <p className="text-sm text-neutral-300 mt-1">{f.text}</p>

                                    {/* Seen By */}
                                    <div className="flex items-center gap-2 mt-2 text-xs text-neutral-400">
                                        {f.seenBy.length > 0 ? (
                                            <>
                                                <Eye size={13} className="text-green-400" />
                                                Seen by {f.seenBy.length} users
                                            </>
                                        ) : (
                                            <>
                                                <EyeOff size={13} className="text-neutral-500" />
                                                Not seen yet
                                            </>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </ScrollArea>
            </CardContent>
        </Card>
    );
}
