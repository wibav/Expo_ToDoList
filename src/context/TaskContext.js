import React, { createContext, useContext, useReducer, useEffect } from 'react';
import * as SQLite from 'expo-sqlite';

const TaskContext = createContext();

// Task reducer to manage state
const taskReducer = (state, action) => {
    switch (action.type) {
        case 'SET_TASKS':
            return { ...state, tasks: action.payload };
        case 'ADD_TASK':
            return { ...state, tasks: [...state.tasks, action.payload] };
        case 'UPDATE_TASK':
            return {
                ...state,
                tasks: state.tasks.map(task =>
                    task.id === action.payload.id ? action.payload : task
                )
            };
        case 'DELETE_TASK':
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload)
            };
        case 'TOGGLE_TASK':
            return {
                ...state,
                tasks: state.tasks.map(task =>
                    task.id === action.payload
                        ? { ...task, completed: !task.completed }
                        : task
                )
            };
        case 'SET_LOADING':
            return { ...state, loading: action.payload };
        default:
            return state;
    }
};

const initialState = {
    tasks: [],
    loading: false,
};

export const TaskProvider = ({ children }) => {
    const [state, dispatch] = useReducer(taskReducer, initialState);

    useEffect(() => {
        initializeDatabase();
        loadTasks();
    }, []);

    // Initialize the SQLite database
    const initializeDatabase = async () => {
        try {
            const db = await SQLite.openDatabaseAsync('tasks.db');

            // Crear la tabla con todas las columnas desde el inicio
            await db.execAsync(`
                CREATE TABLE IF NOT EXISTS tasks (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    title TEXT NOT NULL,
                    description TEXT,
                    date TEXT,
                    time TEXT,
                    completed INTEGER DEFAULT 0,
                    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
                    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
                );
            `);

        } catch (_error) {
            // Error initializing database
        }
    };    // Load tasks from the database
    const loadTasks = async () => {
        try {
            dispatch({ type: 'SET_LOADING', payload: true });
            const db = await SQLite.openDatabaseAsync('tasks.db');
            const result = await db.getAllAsync('SELECT * FROM tasks ORDER BY created_at DESC');
            dispatch({ type: 'SET_TASKS', payload: result });
        } catch (_error) {
            // Error loading tasks
        } finally {
            dispatch({ type: 'SET_LOADING', payload: false });
        }
    };

    // Add task
    const addTask = async (title, description = '', date = null, time = null) => {
        const db = await SQLite.openDatabaseAsync('tasks.db');
        const now = new Date().toISOString();

        const escapedTitle = title.replace(/'/g, "''");
        const escapedDescription = (description || '').replace(/'/g, "''");

        let insertQuery = `INSERT INTO tasks (title, description, date, time, completed, created_at, updated_at) VALUES (
            '${escapedTitle}', 
            '${escapedDescription}', `;

        if (date && date !== 'null') {
            insertQuery += `'${date}', `;
        } else {
            insertQuery += `NULL, `;
        }

        if (time && time !== 'null') {
            insertQuery += `'${time}', `;
        } else {
            insertQuery += `NULL, `;
        }

        insertQuery += `0, '${now}', '${now}')`;

        await db.execAsync(insertQuery);

        const result = await db.getAllAsync('SELECT last_insert_rowid() as id');
        const newTaskId = result[0].id;

        const newTask = {
            id: newTaskId,
            title,
            description: description || '',
            date: date || null,
            time: time || null,
            completed: 0,
            created_at: now,
            updated_at: now,
        };

        dispatch({ type: 'ADD_TASK', payload: newTask });
        return newTask;
    };

    // Update task
    const updateTask = async (id, updates) => {
        const db = await SQLite.openDatabaseAsync('tasks.db');
        const currentTimestamp = new Date().toISOString();

        const escapedTitle = updates.title.replace(/'/g, "''");
        const escapedDescription = (updates.description || '').replace(/'/g, "''");

        let updateQuery = `UPDATE tasks SET 
            title = '${escapedTitle}', 
            description = '${escapedDescription}', `;

        if (updates.date && updates.date !== 'null') {
            updateQuery += `date = '${updates.date}', `;
        } else {
            updateQuery += `date = NULL, `;
        }

        if (updates.time && updates.time !== 'null') {
            updateQuery += `time = '${updates.time}', `;
        } else {
            updateQuery += `time = NULL, `;
        }

        const completedValue = updates.completed !== undefined ? updates.completed : 0;
        updateQuery += `completed = ${completedValue}, updated_at = '${currentTimestamp}' WHERE id = ${id}`;

        await db.execAsync(updateQuery);

        const updatedTask = { ...updates, id, updated_at: currentTimestamp };
        dispatch({ type: 'UPDATE_TASK', payload: updatedTask });
    };

    // Toggle task completion
    const toggleTask = async (id) => {
        const task = state.tasks.find(t => t.id === id);
        const newCompleted = task.completed ? 0 : 1;
        const currentTimestamp = new Date().toISOString();

        const db = await SQLite.openDatabaseAsync('tasks.db');

        const updateQuery = `UPDATE tasks SET completed = ${newCompleted}, updated_at = '${currentTimestamp}' WHERE id = ${id}`;

        await db.execAsync(updateQuery);

        dispatch({ type: 'TOGGLE_TASK', payload: id });
    };

    // Delete task
    const deleteTask = async (id) => {
        const db = await SQLite.openDatabaseAsync('tasks.db');

        await db.execAsync(`DELETE FROM tasks WHERE id = ${id}`);

        dispatch({ type: 'DELETE_TASK', payload: id });
    };

    const value = {
        tasks: state.tasks,
        loading: state.loading,
        addTask,
        updateTask,
        toggleTask,
        deleteTask,
        loadTasks,
    };

    return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};

export const useTask = () => {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error('useTask must be used within a TaskProvider');
    }
    return context;
};
