import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {loadUser} from "./usersStoreActions";

export function getCurrentUser(state) {
    if(state.currentUserId === null) {
        alert("login first");
        return;
    }
    return state;
}

function reducer(state, action) {
    switch (action.type) {
        case "change user" : {
            let user = action.user;
            return {
                id: user.id,
                login: user.login,
                email: user.email,
                password: user.password
            }
        }
        default: return state;
    }
}

export default function createUsersStore() {
    let store = createStore(reducer, {}, applyMiddleware(thunk));
    store.dispatch(loadUser());
    return store;
}