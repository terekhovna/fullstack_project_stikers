export function descriptionEdited(value) {
    return {
        type: "descriptionEdited",
        description: value
    }
}

export function itemIsDoneEdited(id, isDone) {
    return {
        type: "itemIsDoneEdited",
        id: id,
        isDone: isDone
    }
}

export function itemTextEdited(id, text) {
    return {
        type: "itemTextEdited",
        id: id,
        text: text
    }
}

export function addItem(text) {
    return {
        type: "addItem",
        text: text
    }
}

export function deadlineEdited(deadline) {
    return {
        type: "deadlineEdited",
        deadline: deadline
    }
}

export function workHoursEdited(workHours) {
    return {
        type: "workHoursEdited",
        workHours: workHours
    }
}

export function notesEdited(notes) {
    return {
        type: "notesEdited",
        notes: notes
    }
}

export function addTask(task) {
    return {
        type: "addTask",
        task: task
    }
}

export function clean() {
    return {
        type: "clean"
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