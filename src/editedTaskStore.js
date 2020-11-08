import { createStore } from 'redux'
import {deadlineToString, workHoursToString} from "./components/DataParserAndValidator";

function reducer(state, action) {
    switch(action.type) {
        case 'descriptionEdited': {
            return {
                ...state,
                description: action.description
            }
        }
        case 'itemIsDoneEdited' : {
            let newItems = [...(state.items || [])];
            newItems[action.id] = {
                ...newItems[action.id],
                isDone: action.isDone
            }
            return {
                ...state,
                items: newItems
            }
        }
        case 'itemTextEdited' : {
            let newItems = [...state.items];
            newItems[action.id] = {
                ...newItems[action.id],
                text: action.text
            }
            return {
                ...state,
                items: newItems
            }
        }
        case 'addItem' : {
            let newItems = [...(state.items || [])];
            newItems.push({text: action.text, isDone: false});
            return {
                ...state,
                items: newItems
            }
        }
        case 'deadlineEdited' : {
            return {
                ...state,
                deadline: action.deadline
            }
        }
        case 'workHoursEdited' : {
            return {
                ...state,
                workHours: action.workHours
            }
        }
        case 'notesEdited' : {
            return {
                ...state,
                notes: action.notes
            }
        }
        case 'clean' : {
            return {}
        }
        default: {
            return state;
        }
    }
}

function getState(task) {
    if(!task) {
        return {};
    }
    return {
        ...task,
        workHours: workHoursToString(task.workHours),
        deadline: deadlineToString(task.deadline)
    };
}

export function createEditedTaskStore(task = null) {
    return createStore(reducer, getState(task));
}