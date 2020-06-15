import {
    ToggleActionTypes as ActionTypes,
    IToggleActionTypes,
    IToggleState,
} from "./types";

const initialState: IToggleState = {
    taskForm: false,
};

export const toggleReducer = (state = initialState, action: IToggleActionTypes) => {
    switch (action.type) {
        case ActionTypes.TaskForm:
            return {
                ...state,
                taskForm: action.payload
            }
        default:
            return state;
    }
};
