"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { SidebarInset } from "@/components/ui/sidebar";
import {
    BusinessMetrics,
    FunnelTraffic,
    ChatTopicsInsights,
    UserFeedbackStream,
    AdminNotificationSender,
    MyWork
} from "@/components/admin";
import { Workflow, Share2, MessageSquare, Users, Bell, Menu, X } from "lucide-react";

export default function Home() {
    const router = useRouter();
    const [activeView, setActiveView] = useState("metrics");
    const [mobileOpen, setMobileOpen] = useState(false);

    const views = [
        { id: "metrics", label: "Business Metrics", icon: Workflow },
        { id: "funnel", label: "Funnel Traffic", icon: Share2 },
        { id: "chat", label: "Chat Insights", icon: MessageSquare },
        { id: "feedback", label: "Feedback", icon: Users },
        { id: "notifications", label: "Notifications", icon: Bell },
        { id: "my work", label: "My Work", icon: Bell },
    ];

    const goToChatPage = () => router.push("/chat");

    const switchView = (id: string) => {
        setActiveView(id);
        setMobileOpen(false);
    };

    const renderView = () => {
        switch (activeView) {
            case "metrics": return <BusinessMetrics />;
            case "funnel": return <FunnelTraffic />;
            case "chat": return <ChatTopicsInsights />;
            case "feedback": return <UserFeedbackStream />;
            case "notifications": return <AdminNotificationSender />;
            case "my work": return <MyWork />;
            default: return <BusinessMetrics />;
        }
    };

    return (
        <div className="w-full h-full">
            <SidebarInset className="flex flex-col h-screen w-full bg-zinc-950">

                {/* Top Bar */}
                <div className="flex items-center justify-between px-4 py-4 border-b border-zinc-800 bg-zinc-950 sticky top-0 z-50">
                    <h1 className="hidden md:block text-xl font-semibold text-white tracking-tight">
                        Admin Dashboard
                    </h1>

                    {/* Desktop Nav Buttons */}
                    <div className="hidden md:flex gap-2">
                        {views.map(({ id, label, icon: Icon }) => (
                            <button
                                key={id}
                                onClick={() => switchView(id)}
                                className={`cursor-pointer flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all
                                    ${activeView === id
                                        ? "bg-indigo-600 text-white shadow-md shadow-indigo-900/40"
                                        : "bg-zinc-900 text-zinc-400 hover:bg-zinc-800 hover:text-white"}`}
                            >
                                <Icon className="w-4 h-4" />
                                {label}
                            </button>
                        ))}

                        <button
                            onClick={goToChatPage}
                            className="cursor-pointer px-4 py-2 rounded-md text-sm bg-zinc-800 text-white hover:bg-zinc-700 border border-zinc-700"
                        >
                            Go to Chat
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="md:hidden text-zinc-300 hover:text-white"
                    >
                        {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Slide-Out Menu */}
                {mobileOpen && (
                    <div className="absolute top-16 left-0 w-full bg-zinc-900 border-b border-zinc-800 z-40">
                        {views.map(({ id, label, icon: Icon }) => (
                            <button
                                key={id}
                                onClick={() => switchView(id)}
                                className={`cursor-pointer flex w-full items-center gap-3 px-5 py-3 text-left text-sm font-medium
                                    ${activeView === id
                                        ? "bg-indigo-700 text-white"
                                        : "text-zinc-300 hover:bg-zinc-800 hover:text-white"}`}
                            >
                                <Icon className="w-4 h-4" /> {label}
                            </button>
                        ))}

                        <button
                            onClick={goToChatPage}
                            className="cursor-pointer w-full text-left px-5 py-3 text-sm bg-zinc-800 text-white hover:bg-zinc-700"
                        >
                            Go to Chat
                        </button>
                    </div>
                )}

                {/* Content */}
                <div className="min-h-screen bg-neutral-900 text-white p-6 space-y-8">
                    <h1 className="text-xl font-bold md:hidden">Admin Dashboard</h1>
                    {renderView()}
                </div>
            </SidebarInset>
        </div>
    );
}
