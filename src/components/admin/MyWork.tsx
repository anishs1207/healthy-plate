"use client";

import { useState } from "react";
import AdminView from "./AdminView";
import WorkerView from "./WorkerView";
import { Button } from "@/components/ui/button";

export default function MyWork() {
    const [mode, setMode] = useState<"admin" | "worker">("worker");

    return (
        <div className="min-h-screen  text-white">
            {/* Toggle Header */}
            <div className="flex justify-between items-center mb-6">
                {/* <h1 className="text-xl font-bold">
                    {mode === "admin" ? "" : "Worker Workspace"}
                </h1> */}

                <div className="flex gap-3">
                    <Button
                        variant={mode === "worker" ? "default" : "outline"}
                        onClick={() => setMode("worker")}
                    >
                        Worker View
                    </Button>

                    <Button
                        variant={mode === "admin" ? "default" : "outline"}
                        onClick={() => setMode("admin")}
                    >
                        Admin View
                    </Button>
                </div>
            </div>

            {/* Render Components */}
            {mode === "admin" ? <AdminView /> : <WorkerView />}
        </div>
    );
}
