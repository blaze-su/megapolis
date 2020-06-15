import { TasksActionTypes as ActionTypes, ITasksActionTypes } from "./types";

import { Dispatch } from "react";
import { ITask } from "../../types";

type IRequest = Dispatch<ITasksActionTypes>;

const sendingRequest = (loading: boolean) => ({
    type: ActionTypes.LOADING,
    payload: loading,
});

export const initTasksComplete = () => ({
    type: ActionTypes.INIT,
    payload: null,
});

const fetchTasksComplete = (tasks: ITask[]) => ({
    type: ActionTypes.FETCH,
    payload: tasks,
});

export const fetchTasks = (url: string) => (dispatch: IRequest) => {
    dispatch(sendingRequest(true));
    fetch(url)
        .then((res) => res.json())
        .then(({data}) => {
            console.log("data", data)
            return dispatch(fetchTasksComplete(data));
        })
        .then(() => dispatch(sendingRequest(false)))
        .catch((err) => console.error(err.message));
};