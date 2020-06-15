import {
    TasksActionTypes as ActionTypes,
    ITasksActionTypes,
    ITasksState,
} from "./types";

const initialState: ITasksState = {
    tasks: [],
    isTaskLoading: true,
};

export const tasksReducer = (state = initialState, action: ITasksActionTypes) => {
    switch (action.type) {
        case ActionTypes.INIT:
            return {
                ...state,
                ...initialState
            }
        case ActionTypes.FETCH:
            return {
                ...state,
                tasks: action.payload,
            };
        case ActionTypes.LOADING:
            return {
                ...state,
                isTasksLoading: action.payload
            }
        default:
            return state;
        
    }
};
