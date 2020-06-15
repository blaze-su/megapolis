import {
    TaskActionTypes as ActionTypes,
    ITaskActionTypes,
    ITaskState,
} from "./types";

const initialState: ITaskState = {
    task: null,
    isTaskLoading: true,
};

export const taskReducer = (state = initialState, action: ITaskActionTypes) => {
    switch (action.type) {
        case ActionTypes.INIT:
            return {
                ...state,
                ...initialState
            }
        case ActionTypes.FETCH:
            return {
                ...state,
                task: action.payload,
            };
        case ActionTypes.ADD:
            return {
                ...state,
                task: action.payload,
            }
        case ActionTypes.UPDATE:
            return {
                ...state,
                task: action.payload
            }
        case ActionTypes.DELETE:
            return {
                ...state,
                task: action.payload
            }
        case ActionTypes.LOADING:
            return {
                ...state,
                isTaskLoading: action.payload
            }
        default:
            return state;
        
    }
};
