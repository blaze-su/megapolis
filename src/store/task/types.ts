import { ITask } from "../../types";

export const TaskActionTypes = {
    INIT: "@@task/INIT",
    FETCH: "@@task/FETCH",
    ADD: "@@task/ADD",
    UPDATE: "@@task/UPDATE",
    DELETE: "@@task/DELETE",
    LOADING: "@@task/LOADING",
};


export type TaskActionTypes = typeof TaskActionTypes[keyof typeof TaskActionTypes];


export type ITaskState = {
    task: null,
    isTaskLoading: boolean
}


type IInitTaskAction = {
    type: typeof TaskActionTypes.INIT
    payload: null
}


type IFetchTaskAction = {
    type: typeof TaskActionTypes.FETCH
    payload: ITask
}


type IAddTaskAction = {
    type: typeof TaskActionTypes.ADD
    payload: ITask
}


type IUpdateTaskAction = {
    type: typeof TaskActionTypes.UPDATE
    payload: ITask
}

type IDeleteTaskAction = {
    type: typeof TaskActionTypes.DELETE
    payload: ITask | null
}


type ILoadingTaskAction = {
    type: typeof TaskActionTypes.LOADING
    payload: boolean
}


export type ITaskActionTypes = 
    | IInitTaskAction 
    | IFetchTaskAction
    | IAddTaskAction
    | IUpdateTaskAction
    | IDeleteTaskAction
    | ILoadingTaskAction;