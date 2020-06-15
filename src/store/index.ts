import { applyMiddleware, combineReducers, createStore } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";
import { reducer as formReducer } from 'redux-form'
import { taskReducer } from "./task";
import { tasksReducer } from "./tasks"
import thunk from "redux-thunk";
import { toggleReducer } from "./toggle"

const rootReducer = combineReducers({
    taskReducer,
    tasksReducer,
    toggleReducer,
    form: formReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);
