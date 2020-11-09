export function editLogin(login) {
    return {
        type: "editLogin",
        login: login
    }
}

export function editEmail(email) {
    return {
        type: "editEmail",
        email: email
    }
}

export function editPassword(password) {
    return {
        type: "editPassword",
        password: password
    }
}

export function editPassword1(password) {
    return {
        type: "editPassword1",
        password: password
    }
}

export function editPassword2(password) {
    return {
        type: "editPassword2",
        password: password
    }
}

export function editLoginInPair(login) {
    return {
        type: "editLoginInPair",
        login: login
    }
}

export function editEmailInPair(email) {
    return {
        type: "editEmailInPair",
        email: email
    }
}

export function cleanSignUp() {
    return {
        type: "cleanSignUp"
    }
}

export function cleanSignIn() {
    return {
        type: "cleanSignIn"
    }
}