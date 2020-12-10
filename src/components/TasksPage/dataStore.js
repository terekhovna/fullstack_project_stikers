import {applyMiddleware, createStore} from "redux";
import thunk from 'redux-thunk'
import {update} from "./dataStoreActions";

function getTaskById(state, id) {
    for(let i = 0; i < state.tabs.length; ++i) {
        const result = state.tabs[i].tasks.find((e) => (e.id === id))
        if (result) {
            return [result, i];
        }
    }
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'update': {
            return {
                ...action.data
            };
        }
        default: return state;
    }
}

export function findTask(store, id) {
    const state = store.getState();
    return getTaskById(state, id)[0];
}

export default function createDataStore() {
    let store = createStore(reducer, {activeTabId:null,tabs:[]}, applyMiddleware(thunk));
    store.dispatch(update());
    return store;
}