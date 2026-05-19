import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Task {
  id: string | number;
  title: string;
  type: 'task' | 'bug';
  priority: 'low' | 'medium' | 'high';
  status: 'todo' | 'doing' | 'done';
  desc: string;
  deadline?: string;
  assigneeId?: number | string;
}

export interface Idea {
  id: string | number;
  content: string;
}

interface TasksState {
  tasks: Task[];
  ideas: Idea[];
}

const initialState: TasksState = {
  tasks: [
    { id: 1, title: "Fix login redirect", type: "bug", priority: "high", status: "todo", desc: "Redirect issue on login", assigneeId: 1 },
    { id: 2, title: "Improve dashboard UI", type: "task", priority: "medium", status: "todo", desc: "Better layout & charts", assigneeId: 2 },
  ],
  ideas: [],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
    },
    updateTask: (state, action: PayloadAction<Task>) => {
      const index = state.tasks.findIndex(t => t.id === action.payload.id);
      if (index !== -1) {
        state.tasks[index] = action.payload;
      }
    },
    deleteTask: (state, action: PayloadAction<string | number>) => {
      state.tasks = state.tasks.filter(t => t.id !== action.payload);
    },
    updateTaskStatus: (state, action: PayloadAction<{ id: string | number; status: 'todo' | 'doing' | 'done' }>) => {
      const task = state.tasks.find(t => t.id === action.payload.id);
      if (task) {
        task.status = action.payload.status;
      }
    },
    addIdea: (state, action: PayloadAction<Idea>) => {
      state.ideas.push(action.payload);
    },
    updateIdea: (state, action: PayloadAction<Idea>) => {
      const index = state.ideas.findIndex(i => i.id === action.payload.id);
      if (index !== -1) {
        state.ideas[index] = action.payload;
      }
    },
    deleteIdea: (state, action: PayloadAction<string | number>) => {
      state.ideas = state.ideas.filter(i => i.id !== action.payload);
    }
  },
});

export const { 
  addTask, 
  updateTask, 
  deleteTask, 
  updateTaskStatus, 
  addIdea, 
  updateIdea, 
  deleteIdea 
} = tasksSlice.actions;

export default tasksSlice.reducer;
