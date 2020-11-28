import http from "../../utils/http";
import {
    isValidWorkHours,
    parseWorkHours
} from "./DataParserAndValidator";

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
        return null;
    }
}

function processTask(task) {
    console.log(task);
    task.description = task.description || "";
    task.items = JSON.stringify(processItems(task.items));
    task.id = null;
    task.workHours = processWorkHours(task.workHours);
    return task;
}

export function update() {
    return (dispatch) => {
        http("tabs", "get")
            .then((json) => dispatch({type: "update", data: json}))
            .catch((json) => alert(json.error))
    }
}

export function addTask(task) {
    return (dispatch) => {
        http("tasks", "post", processTask({...task}))
            .then(() => dispatch(update()))
            .catch((json) => alert(json.error));
    }
}

export function addTab(title) {
    return (dispatch) => {
        http("tabs", "post", {title: title.trim()})
            .then(() => dispatch(update()))
            .catch((json) => alert(json.error));
    };
}

export function changeActiveTab(id) {
    return (dispatch) => {
        http("tabs/" + id, "post")
            .then(() => dispatch(update()))
            .catch((json) => alert(json.error));
    };
}

export function deleteTask(id) {
    return (dispatch) => {
        http("tasks", "delete", {id})
            .then(() => dispatch(update()))
            .catch((json) => alert(json.error));
    };
}

export function taskEdited(id, task) {
    return (dispatch) => {
        http("tasks", "put", {...processTask({...task}), id})
            .then(() => dispatch(update()))
            .catch((json) => alert(json.error));
    }
}