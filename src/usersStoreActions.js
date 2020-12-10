import http from "./utils/http";
import {isValidEmail} from "./components/LoginPage/DataValidator";

export function changeUser(user) {
    return {
        type: "change user",
        user
    }
}

export function logout(id) {
    return (dispatch) => {
        http("logout", "post", {}, false)
            .then((json) => {dispatch(changeUser({id: null}))})
            .catch((json) => {dispatch(changeUser({id: null}))})
            // .catch((json) => alert(json.error))
    }
}

export function userSignIn(loginData) {
    return (dispatch) => {
        http(`perform_login?username=${loginData.loginInPair||""};${loginData.emailInPair||""}&password=${loginData.password}`, "post")
            .then((json) => {dispatch(loadUser())})
            .catch((json) => alert(json.error))
    }
}

function validateEmail(email) {
    email = (email || "").trim();
    return (!!email && isValidEmail(email));

}

function validateLogin(login) {
    login = (login || "").trim();
    return login;

}

function validatePassword(password1, password2) {
    if(!password1) {
        return false
    }
    return password1 === password2;
}

export function userSignUp(loginData) {
    if(!validateLogin(loginData.login)) {
        alert("wrong user login")
    }
    if(!validateEmail(loginData.email)) {
        alert("wrong user email")
    }
    if(!validatePassword(loginData.password1, loginData.password2)) {
        alert("wrong user password")
    }
    return (dispatch) => {
        http("sign_up", "post",
            {login: loginData.login, email: loginData.email, password: loginData.password1}) //TODO
            .then((json) => {dispatch(changeUser(json))})
            .catch((json) => alert(json.error))
    }
}

export function loadUser() {
    return (dispatch) => {
        http("user", "post")
            .then((user) => {dispatch(changeUser(user))})
            .catch((json) => {})
            // .catch((json) => alert(json.error))
    }
}

export function restoreData(loginData) {
    return (dispatch) => {
        http("restore_data", "post",
            {login: loginData.loginInPair || null, email: loginData.emailInPair || null})
            .then((user) =>
                {alert(`Ваши данные\nlogin: ${user.login}\nemail: ${user.email}\npassword ${user.password}`)})
            .catch((json) => alert(json.error))
    }
}