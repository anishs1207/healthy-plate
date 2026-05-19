"use client";

import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectItem, SelectContent, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Send } from "lucide-react";
import { motion } from "framer-motion";

export default function AdminNotificationSender() {
    const [target, setTarget] = useState("all");
    const [user, setUser] = useState("");
    const [message, setMessage] = useState("");
    const [sending, setSending] = useState(false);

    const sendNotification = async () => {
        if (!message.trim()) return;

        setSending(true);

        // TODO: connect to your backend / API
        setTimeout(() => {
            console.log({
                sendTo: target,
                user: target === "specific" ? user : null,
                message
            });
            setSending(false);
            setMessage("");
            setUser("");
            alert("✅ Notification Sent");
        }, 1000);
    };

    return (
        <Card className="bg-neutral-900 border-neutral-800 shadow-lg">
            <CardHeader>
                <CardTitle className="text-neutral-200 font-semibold flex items-center gap-2">
                    <Send className="text-indigo-400" size={18} />
                    Send Notifications
                </CardTitle>
                <p className="text-sm text-neutral-400">
                    Push announcements or messages directly to users.
                </p>
            </CardHeader>

            <CardContent className="space-y-4">

                {/* Select audience */}
                <div>
                    <label className="text-sm text-neutral-300 mb-1 block">Send To</label>
                    <Select onValueChange={setTarget} defaultValue="all">
                        <SelectTrigger className="bg-neutral-800 border-neutral-700 text-neutral-300">
                            <SelectValue placeholder="Choose audience" />
                        </SelectTrigger>
                        <SelectContent className="bg-neutral-800 text-neutral-300 border-neutral-700">
                            <SelectItem value="all">All Users</SelectItem>
                            <SelectItem value="specific">Specific User</SelectItem>
                            <SelectItem value="pro">Pro / Premium Users</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                {/* Specific user input */}
                {target === "specific" && (
                    <div>
                        <label className="text-sm text-neutral-300 mb-1 block">User Email / ID</label>
                        <Input
                            className="bg-neutral-800 border-neutral-700 text-neutral-200"
                            placeholder="Enter user email or ID..."
                            value={user}
                            onChange={(e) => setUser(e.target.value)}
                        />
                    </div>
                )}

                {/* Message box */}
                <div>
                    <label className="text-sm text-neutral-300 mb-1 block">Message</label>
                    <Textarea
                        className="bg-neutral-800 border-neutral-700 text-neutral-200"
                        placeholder="Write your notification..."
                        value={message}
                        rows={5}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </div>

                {/* Send button */}
                <motion.div whileTap={{ scale: 0.97 }}>
                    <Button
                        onClick={sendNotification}
                        disabled={sending}
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white flex items-center justify-center gap-2"
                    >
                        {sending ? "Sending..." : "Send Notification"}
                        <Send size={16} />
                    </Button>
                </motion.div>
            </CardContent>
        </Card>
    );
}
