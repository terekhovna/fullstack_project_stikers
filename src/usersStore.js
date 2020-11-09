import {createStore} from "redux";
import {isValidEmail} from "./components/LoginPage/DataValidator";

function getUserIndex(state, userId) {
    return state.users.findIndex((user) => (user.id === userId));
}

export function getUser(state, userId) {
    const index = getUserIndex(state, userId);
    if(index === -1) {
        alert("not such user");
        return null;
    }
    return state.users[index];
}

export function getCurrentUser(state) {
    if(state.currentUserId === null) {
        alert("login first");
        return;
    }
    return getUser(state, state.currentUserId);
}

function getUserByLogin(state, login) {
    return state.users.find((user)=>user.login===login);
}

function getUserByEmail(state, email) {
    return state.users.find((user)=>user.email===email);
}

function getUserByLoginOrEmail(state, email, login) {
    email = (email || "").trim();
    login = (login || "").trim();
    return (!login)? getUserByEmail(state, email): getUserByLogin(state, login);
}

function generateUserId() {
    return new Date().getTime();
}

function validateEmail(state, email) {
    email = (email || "").trim();
    if(!email || !isValidEmail(email)) {
        return false;
    }
    return !getUserByEmail(state, email);
}

function validateLogin(state, login) {
    login = (login || "").trim();
    if(!login) {
        return false;
    }
    return !getUserByLogin(state, login);
}

function validatePassword(password1, password2) {
    if(!password1) {
        return false
    }
    return password1 === password2;
}

function reducer(state, action) {
    switch (action.type) {
        case "logout" : {
            return {
                ...state,
                currentUserId: null
            }
        }
        case "userSignIn" : {
            const user = getUserByLoginOrEmail(state, action.loginData.emailInPair, action.loginData.loginInPair)
            if(!user) {
                alert("wrong user login or email")
                return state;
            }
            if(user.password !== action.loginData.password) {
                alert("wrong user password")
                return state;
            }
            return {
                ...state,
                currentUserId: user.id
            }
        }
        case "userSignUp" : {
            if(!validateLogin(state, action.loginData.login)) {
                alert("wrong user login")
                return state;
            }
            if(!validateEmail(state, action.loginData.email)) {
                alert("wrong user email")
                return state;
            }
            if(!validatePassword(action.loginData.password1, action.loginData.password2)) {
                alert("wrong user password")
                return state;
            }
            let user = {
                id: generateUserId(),
                login: action.loginData.login,
                email: action.loginData.email,
                password: action.loginData.password1,
                data: {
                    activeTabId: NaN,
                    tabs: []
                }
            }
            return {
                ...state,
                currentUserId: user.id,
                users: [
                    ...state.users,
                    user
                ]
            }
        }
        case "restoreData" : {
            const user = getUserByLoginOrEmail(state, action.loginData.emailInPair, action.loginData.loginInPair)
            if(!user) {
                alert("wrong user login or email")
                return state;
            }
            alert(`Ваши данные\nlogin: ${user.login}\nemail: ${user.email}\npassword ${user.password}`)
            return state;
        }
        default: return state;
    }
}

export default function createUsersStore(data) {
    return createStore(reducer, data);
}