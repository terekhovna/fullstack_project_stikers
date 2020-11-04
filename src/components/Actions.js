export function descriptionEdited(value) {
    return {
        type: "descriptionEdited",
        description: value
    }
}

export function itemIsDoneEdited(id, isDone) {
    return {
        type: "itemDoneEdited",
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