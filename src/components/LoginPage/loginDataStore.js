import {createStore} from "redux";

function reducer(state, action) {
    switch (action.type) {
        case "editLogin" : {
            return {
                ...state,
                login: action.login
            }
        }
        case "editEmail" : {
            return {
                ...state,
                email: action.email
            }
        }
        case "editPassword" : {
            return {
                ...state,
                password: action.password
            }
        }
        case "editPassword1" : {
            return {
                ...state,
                password1: action.password
            }
        }
        case "editPassword2" : {
            return {
                ...state,
                password2: action.password
            }
        }
        case "editLoginInPair" : {
            return {
                ...state,
                loginInPair: action.login,
                emailInPair: ""
            }
        }
        case "editEmailInPair" : {
            return {
                ...state,
                emailInPair: action.email,
                loginInPair: ""
            }
        }
        case "cleanSignUp" : {
            return {
                ...state,
                password1: "",
                password2: ""
            }
        }
        case "cleanSignIn" : {
            return {
                ...state,
                password: ""
            }
        }
        default: return state;
    }
}

export function createLoginDataStore() {
    return createStore(reducer, {});
}