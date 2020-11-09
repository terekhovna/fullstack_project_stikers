import {createStore} from "redux";
import {isValidDeadline, isValidWorkHours, parseDeadline, parseWorkHours}
    from "./DataParserAndValidator";

function generateTabId(title) {
    return new Date().getTime();
}

function generateTaskId(task) {
    return new Date().getTime(); //TODO norm id generation
}

function processDeadline(deadline) {
    if(isValidDeadline(deadline)) {
        return parseDeadline(deadline);
    }
    else {
        return (deadline || "").trim();
    }
}

function processItems(items) {
    items = items || [];
    return items.map((item) => {return {
        text: item.text.trim(),
        isDone: item.isDone
    }}).filter((item) => item.text.length);
}

function processWorkHours(workHours) {
    if(isValidWorkHours(workHours)) {
        return parseWorkHours(workHours);
    }
    else {
        return (workHours || "").trim();
    }
}

function processTask(task) {
    task.description = task.description || "";
    task.items = processItems(task.items);
    task.deadline = processDeadline(task.deadline);
    task.id = generateTaskId(task);
    task.workHours = processWorkHours(task.workHours);
    return task;
}

function getCurrentTabIndex(state) {
    if(isNaN(state.activeTabId)) {
        alert("create Tab first");
        return NaN;
    }
    return state.tabs.findIndex((tab) => (tab.id === state.activeTabId));
}

function getTaskById(state, id) {
    for(let i = 0; i < state.tabs.length; ++i) {
        const result = state.tabs[i].tasks.find((e) => (e.id === id))
        if (result) {
            return [result, i];
        }
    }
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'addTask': {
            let task = processTask(action.task);
            if(isNaN(state.activeTabId)) {
                alert("create Tab first");
                return state;
            }
            const index = getCurrentTabIndex(state);
            let tabs = [...state.tabs];
            tabs[index] = {
                ...tabs[index],
                tasks: [
                    ...tabs[index].tasks,
                    task
                ]
            }
            return {
                ...state,
                tabs: tabs
            }
        }
        case 'addTab': {
            if (!(action.title || "").trim()) {
                alert("empty title");
                return state;
            }
            const tab = {
                    id: generateTabId(action.title),
                    title: action.title,
                    tasks: []
                };
            return {
                ...state,
                activeTabId: tab.id,
                tabs: [
                    ...state.tabs,
                    tab
                ]
            }
        }
        case 'changeActiveTab' : {
            return {
                ...state,
                activeTabId: action.id
            }
        }
        case 'deleteTask' : {
            const index = getTaskById(state, action.id)[1];
            let tabs = [...state.tabs];
            tabs[index] = {
                ...tabs[index],
                tasks: tabs[index].tasks.filter((task) => (task.id !== action.id))
            }
            return {
                ...state,
                tabs: tabs
            }
        }
        case 'taskEdited' : {
            const index = getTaskById(state, action.id)[1];
            let tabs = [...state.tabs];
            let tasks = [...tabs[index].tasks];
            const taskIndex = tasks.findIndex((task) => task.id === action.id);

            tasks[taskIndex] = processTask(action.task);
            tabs[index] = {
                ...tabs[index],
                tasks: tasks
            }
            return {
                ...state,
                tabs: tabs
            }
        }
        default: return state;
    }
}

export function findTask(store, id) {
    const state = store.getState();
    return getTaskById(state, id)[0];
}

export default function createDataStore(data) {
    return createStore(reducer, data);
}