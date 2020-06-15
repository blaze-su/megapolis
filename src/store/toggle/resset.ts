import { toggleTaskForm } from "./actions";

export const useReset = (dispatch: any) => {
    dispatch(toggleTaskForm(false));
};
