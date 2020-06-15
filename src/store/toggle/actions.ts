import { ToggleActionTypes as ActionTypes, IToggleActionTypes } from "./types";

import { Dispatch } from "react";

type IDispatch = Dispatch<IToggleActionTypes>;

export const toggleTaskForm = (toggle: boolean) =>
    (dispatch: IDispatch) =>
        dispatch({type: ActionTypes.TaskForm, payload: toggle});