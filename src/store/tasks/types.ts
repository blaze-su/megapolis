import { ITask } from "../../types";

export const TasksActionTypes = {
    INIT: "@@tasks/INIT",
    FETCH: "@@tasks/FETCH",
    LOADING: "@@tasks/LOADING",
};


export type TasksActionTypes = typeof TasksActionTypes[keyof typeof TasksActionTypes];


export type ITasksState = {
    tasks: ITask[],
    isTaskLoading: boolean
}


type IInitTasksAction = {
    type: typeof TasksActionTypes.INIT
    payload: ITask[]
}


type IFetchTasksAction = {
    type: typeof TasksActionTypes.FETCH
    payload: ITask[]
}

type ILoadingTasksAction = {
    type: typeof TasksActionTypes.LOADING
    payload: boolean
}


export type ITasksActionTypes = 
    | IInitTasksAction 
    | IFetchTasksAction
    | ILoadingTasksAction;