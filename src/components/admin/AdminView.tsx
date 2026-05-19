"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Select, SelectTrigger, SelectValue, SelectContent, SelectItem
} from "@/components/ui/select";
import {
    Bug, ClipboardList, Pencil, Trash, ArrowRightLeft, CheckCircle, Loader2, X, PlusCircle
} from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { addTask, updateTask, deleteTask, updateTaskStatus, addIdea, updateIdea, deleteIdea, Task, Idea } from "@/store/slices/tasksSlice";

const sampleEmployees = [
    { id: 1, name: "Anish" },
    { id: 2, name: "Anushay" },
    { id: 3, name: "Arpan" },
];

export default function AdminView({ goBack: _goBack }: any) {
    const dispatch = useAppDispatch();
    const tasks = useAppSelector(state => state.tasks.tasks);
    const _ideas = useAppSelector(state => state.tasks.ideas);

    const [bugTitle, setBugTitle] = useState("");
    const [taskTitle, setTaskTitle] = useState("");
    const [deadline, setDeadline] = useState("");
    const [selectedEmployee, setSelectedEmployee] = useState("");
    const [editingTask, setEditingTask] = useState<Task | null>(null);

    const [newIdea, setNewIdea] = useState("");
    const [editingIdea, setEditingIdea] = useState<Idea | null>(null);

    const handleAddBug = () => {
        if (!bugTitle || !selectedEmployee) return;
        dispatch(addTask({ id: Date.now(), type: "bug", title: bugTitle, status: "todo", desc: "", priority: "high", assigneeId: +selectedEmployee }));
        setBugTitle(""); setSelectedEmployee("");
    };

    const handleAddTask = () => {
        if (!taskTitle || !selectedEmployee || !deadline) return;
        dispatch(addTask({ id: Date.now(), type: "task", title: taskTitle, deadline, status: "todo", desc: "", priority: "medium", assigneeId: +selectedEmployee }));
        setTaskTitle(""); setDeadline(""); setSelectedEmployee("");
    };

    const handleDeleteTask = (id: string | number) => {
        dispatch(deleteTask(id));
    };

    const handleModifyTask = (updated: Task) => {
        dispatch(updateTask(updated));
    };

    const cycleStatus = (task: Task) => {
        const order = ["todo", "doing", "done"] as const;
        return order[(order.indexOf(task.status) + 1) % order.length];
    };

    const handleSaveEdit = () => {
        if (editingTask) {
            handleModifyTask(editingTask);
            setEditingTask(null);
        }
    };

    // ✅ Ideation Functions
    const handleAddIdea = () => {
        if (!newIdea.trim()) return;
        dispatch(addIdea({ id: Date.now(), content: newIdea }));
        setNewIdea("");
    };

    const saveEditedIdea = () => {
        if (editingIdea) {
            dispatch(updateIdea(editingIdea));
            setEditingIdea(null);
        }
    };

    const _handleDeleteIdea = (id: string | number) => {
        dispatch(deleteIdea(id));
    };

    return (
        <div className="space-y-6 min-h-screen rounded-xl p-6 border border-neutral-800">

            {/* 🔥 IDEATION ZONE */}
            <div className="flex gap-2">
                <textarea
                    placeholder="Add an idea or concept..."
                    value={newIdea}
                    onChange={(e) => {
                        setNewIdea(e.target.value);
                        e.target.style.height = "auto";
                        const maxHeight = 150; // px limit
                        if (e.target.scrollHeight < maxHeight) {
                            e.target.style.height = `${e.target.scrollHeight}px`;
                        } else {
                            e.target.style.height = `${maxHeight}px`;
                        }
                    }}
                    className="bg-neutral-800 text-neutral-200 p-2 rounded-md w-full min-h-[60px] max-h-[150px] overflow-y-auto resize-none outline-none"
                />
                <Button onClick={handleAddIdea} className="h-auto">
                    <PlusCircle size={16} className="mr-1" /> Add
                </Button>
            </div>


            {/* TASK + BUG ASSIGNMENT UI */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-neutral-900 border border-neutral-800 p-5 rounded-xl">
                    <div className="flex items-center gap-2 mb-3 text-neutral-200"><Bug size={18} /> Add Bug</div>
                    <Input className="mb-3 bg-neutral-800" placeholder="Bug title..." value={bugTitle} onChange={e => setBugTitle(e.target.value)} />
                    <Select value={selectedEmployee} onValueChange={setSelectedEmployee}>
                        <SelectTrigger className="mb-3 bg-neutral-800"><SelectValue placeholder="Assign to" /></SelectTrigger>
                        <SelectContent className="bg-neutral-900 border-neutral-700">
                            {sampleEmployees.map(emp => <SelectItem key={emp.id} value={String(emp.id)}>{emp.name}</SelectItem>)}
                        </SelectContent>
                    </Select>
                    <Button onClick={handleAddBug} className="w-full">Add Bug</Button>
                </div>

                <div className="bg-neutral-900 border border-neutral-800 p-5 rounded-xl">
                    <div className="flex items-center gap-2 mb-3 text-neutral-200"><ClipboardList size={18} /> Add Task</div>
                    <Input className="mb-3 bg-neutral-800" placeholder="Task title..." value={taskTitle} onChange={e => setTaskTitle(e.target.value)} />
                    <Input type="date" className="mb-3 bg-neutral-800" value={deadline} onChange={e => setDeadline(e.target.value)} />
                    <Select value={selectedEmployee} onValueChange={setSelectedEmployee}>
                        <SelectTrigger className="mb-3 bg-neutral-800"><SelectValue placeholder="Assign to" /></SelectTrigger>
                        <SelectContent className="bg-neutral-900 border-neutral-700">
                            {sampleEmployees.map(emp => <SelectItem key={emp.id} value={String(emp.id)}>{emp.name}</SelectItem>)}
                        </SelectContent>
                    </Select>
                    <Button onClick={handleAddTask} className="w-full">Add Task</Button>
                </div>
            </div>

            {/* EMPLOYEE BOARDS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                {sampleEmployees.map(emp => (
                    <div key={emp.id} className="bg-neutral-900 p-4 rounded-xl border-neutral-800">
                        <h3 className="font-semibold text-neutral-200 mb-3">{emp.name}</h3>
                        <ul className="space-y-3 text-sm text-neutral-400">
                            {tasks.filter(t => t.assigneeId === emp.id).map(task => (
                                <li key={task.id} className="bg-neutral-800 p-3 rounded-lg space-y-2">
                                    <div className="flex justify-between">
                                        <span className="text-xs px-2 py-1 bg-neutral-700 rounded">{task.type === "bug" ? "🐞 BUG" : "📋 TASK"}</span>
                                        <div className="flex gap-2">
                                            <button onClick={() => dispatch(updateTaskStatus({ id: task.id, status: cycleStatus(task) }))} className="text-blue-400">
                                                {task.status === "todo" ? <Loader2 size={16} /> : task.status === "doing" ? <ArrowRightLeft size={16} /> : <CheckCircle size={16} />}
                                            </button>
                                            <button className="text-yellow-400" onClick={() => setEditingTask(task)}><Pencil size={16} /></button>
                                            <button className="text-red-400" onClick={() => handleDeleteTask(task.id)}><Trash size={16} /></button>
                                        </div>
                                    </div>
                                    <div className="text-neutral-200 font-medium">{task.title}</div>
                                    {task.deadline && <div className="text-xs text-red-400">Deadline: {task.deadline}</div>}
                                    <div className="text-xs text-blue-400">Status: {task.status}</div>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* ✨ Edit Task Modal */}
            {editingTask && (
                <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
                    <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-700 space-y-4 w-80">
                        <div className="flex justify-between items-center">
                            <h3 className="text-white font-semibold">Edit Task</h3>
                            <button onClick={() => setEditingTask(null)}><X className="text-neutral-300" /></button>
                        </div>
                        <Input value={editingTask.title} onChange={e => setEditingTask({ ...editingTask, title: e.target.value })} className="bg-neutral-800" />
                        {editingTask.type === "task" && (
                            <Input type="date" value={editingTask.deadline} onChange={e => setEditingTask({ ...editingTask, deadline: e.target.value })} className="bg-neutral-800" />
                        )}
                        <Button onClick={handleSaveEdit} className="w-full">Save</Button>
                    </div>
                </div>
            )}

            {/* ✨ Edit Idea Modal */}
            {editingIdea && (
                <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
                    <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-700 space-y-4 w-80">
                        <div className="flex justify-between items-center">
                            <h3 className="text-white font-semibold">Edit Idea</h3>
                            <button onClick={() => setEditingIdea(null)}><X className="text-neutral-300" /></button>
                        </div>
                        <Input value={editingIdea.content} onChange={e => setEditingIdea({ ...editingIdea, content: e.target.value })} className="bg-neutral-800" />
                        <Button onClick={saveEditedIdea} className="w-full">Save</Button>
                    </div>
                </div>
            )}
        </div>
    );
}
