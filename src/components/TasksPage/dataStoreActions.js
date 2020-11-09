export function addTask(task) {
    return {
        type: "addTask",
        task: task
    }
}

export function addTab(title) {
    return {
        type: "addTab",
        title: title
    }
}

export function changeActiveTab(id) {
    return {
        type: "changeActiveTab",
        id: id
    }
}

export function deleteTask(id) {
    return {
        type: "deleteTask",
        id: id
    }
}

export function taskEdited(id, task) {
    return {
        type: "taskEdited",
        id: id,
        task: task
    }
}