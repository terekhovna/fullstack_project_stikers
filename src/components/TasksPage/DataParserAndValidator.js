export function parseWorkHours(workHours) {
    if(!workHours || !workHours.trim()) {
        return NaN;
    }
    return Number(workHours);
}

export function isValidWorkHours(workHours) {
    return !isNaN(parseWorkHours(workHours));
}

export function isWorkHours(workHours) {
    return workHours===0 || (workHours && !isNaN(workHours));
}

export function isDeadLine(deadline) {
    return deadline instanceof Date;
}

export function workHoursToString(workHours) {
    if(isWorkHours(workHours)) {
        return workHours.toString();
    }
    else {
        return workHours;
    }
}

export function deadlineToString(deadline) {
    if(isDeadLine(deadline)) {
        return `${deadline.getDate()}.${deadline.getMonth() + 1}.${deadline.getFullYear()} ` +
            `${deadline.getHours()}:${deadline.getMinutes()}`;
    }
    else {
        return deadline;
    }
}

export function parseDeadline(deadline) {
    deadline = deadline || "";
    deadline = deadline.trim()
    if(deadline.match(/^([0-9]+).([0-9]+).([0-9]+) ([0-9]+):([0-9]+)$/)) {
        deadline = deadline.replace(/^([0-9]+).([0-9]+).([0-9]+) ([0-9]+):([0-9]+)$/, "$3-$2-$1 $4:$5")
    }
    else if(deadline.match(/^([0-9]+).([0-9]+) ([0-9]+):([0-9]+)$/)) {
        deadline = deadline.replace(/^([0-9]+).([0-9]+) ([0-9]+):([0-9]+)$/,
            (new Date()).getFullYear().toString() + "-$2-$1 $3:$4")
    }
    else if(deadline.match(/^([0-9]+).([0-9]+)$/)) {
        deadline = deadline.replace(/^([0-9]+).([0-9]+)$/,
            (new Date()).getFullYear().toString() + "-$2-$1 0:0")
    }
    else if(deadline.match(/^([0-9]+).([0-9]+).([0-9]+)$/)) {
        deadline = deadline.replace(/^([0-9]+).([0-9]+).([0-9]+)$/, "$3-$2-$1 0:0")
    }
    else {
        return null;
    }
    return new Date(deadline);
}

export function isValidDeadline(deadline) {
    let date = parseDeadline(deadline);
    return !isNaN(date) && date !== null;
}
