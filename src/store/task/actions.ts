import {
    TaskActionTypes as ActionTypes,
    ITaskActionTypes,
    ITaskState,
} from "./types";

import { Action } from "redux";
import { Dispatch } from "react";
import { ITask } from "../../types";
import { ThunkAction } from "redux-thunk";

type IRequest = Dispatch<ITaskActionTypes>;

const sendingRequest = (loading: boolean) => ({
    type: ActionTypes.LOADING,
    payload: loading,
});

export const initTaskComplete = () => ({
    type: ActionTypes.INIT,
    payload: null,
});

const fetchTaskComplete = (task: ITask) => ({
    type: ActionTypes.FETCH,
    payload: task,
});

export const fetchTask = (url: string) => (dispatch: IRequest) => {
    dispatch(sendingRequest(true));
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            return dispatch(fetchTaskComplete(data));
        })
        .then(() => dispatch(sendingRequest(false)))
        .catch((err) => console.error(err.message));
};

const addTaskComplete = (task: ITask) => ({
    type: ActionTypes.ADD,
    payload: task,
});

export const addTask = (
    url: string,
    task: ITask
): ThunkAction<Promise<void>, ITaskState, unknown, Action<string>> => async (
    dispatch: IRequest
) => {
    dispatch(sendingRequest(true));
    return fetch(url, {
        method: "post",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(task),
    })
        .then((res) => res.json())
        .then((data) => {
            return dispatch(addTaskComplete(data));
        })
        .then(() => dispatch(sendingRequest(false)))
        .catch((err) => console.error(err.message));
};

const updateTaskComplete = (task: ITask) => ({
    type: ActionTypes.UPDATE,
    payload: task,
});

export const updateTask = (
    url: string,
    task: ITask
): ThunkAction<Promise<void>, ITaskState, unknown, Action<string>> => async (
    dispatch: IRequest
) => {
    dispatch(sendingRequest(true));
    return fetch(url, {
        method: "post",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(task),
    })
        .then((res) => res.json())
        .then((data) => {
            return dispatch(updateTaskComplete(data));
        })
        .then(() => dispatch(sendingRequest(false)))
        .catch((err) => console.error(err.message));
};

const deleteTaskComplete = (task: ITask) => ({
    type: ActionTypes.DELETE,
    payload: task,
});

export const deleteTask = (
    url: string
): ThunkAction<Promise<void>, ITaskState, unknown, Action<string>> => async (
    dispatch
) => {
    return fetch(url, {
        method: "delete",
    })
        .then((res) => res.json())
        .then((data) => {
            dispatch(deleteTaskComplete(data));
        })
        .catch((err) => console.error(err.message));
};
