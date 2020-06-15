export const ToggleActionTypes = {
    TaskForm: "@@toggle/TASK_FORM",
};


export type ToggleActionTypes = typeof ToggleActionTypes[keyof typeof ToggleActionTypes];


export type IToggleState = {
    taskForm: boolean,
}


type IToggleTaskFormAction = {
    type: typeof ToggleActionTypes.TaskForm
    payload: boolean
}


export type IToggleActionTypes = 
    | IToggleTaskFormAction 
 