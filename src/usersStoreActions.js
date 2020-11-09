export function logout(id) {
    return {
        type: "logout",
        id: id
    }
}

export function userSignIn(loginData) {
    return {
        type: "userSignIn",
        loginData: loginData
    }
}

export function userSignUp(loginData) {
    return {
        type: "userSignUp",
        loginData: loginData
    }
}

export function restoreData(loginData) {
    return {
        type: "restoreData",
        loginData: loginData
    }
}

export function updateUserData(userId, data) {
    return {
        type: "updateUserData",
        userId,
        data
    }
}