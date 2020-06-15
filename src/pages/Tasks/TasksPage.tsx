import { ITaskActionTypes, ITaskState, addTask } from "store/task";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Box } from "components/Box";
import { HOST_API } from "keys";
import { ITask } from "types";
import { Task } from "components/Task";
import { TaskForm } from "components/Forms/TaskForms";
import { ThunkDispatch } from "redux-thunk";
import { fetchTasks } from "store/tasks";
import style from "./TaskPage.module.scss";
import { toggleTaskForm } from "store/toggle";

export const TasksPage = () => {
    const dispatch: ThunkDispatch<
        ITaskState,
        unknown,
        ITaskActionTypes
    > = useDispatch();

    const url: string = `${HOST_API}/list/`;

    useEffect((): any => dispatch(fetchTasks(url)), [url, dispatch]);
    const tasksReducer = useSelector((store: any) => store.tasksReducer);
    const isFormOpen = useSelector(
        (store: any) => store.toggleReducer.taskForm
    );
    const { tasks, isTasksLoading } = tasksReducer;

    const submitHandler = (values: any) => {
        dispatch(addTask(url, values as ITask)).then(() => {
            dispatch(fetchTasks(url));
            dispatch(toggleTaskForm(false));
        });
    };

    return (
        <>
            <Box>
                <div className={style.page}>
                    <h1>Список задач</h1>
                    <button
                        className={style.add__button}
                        onClick={() => dispatch(toggleTaskForm(true))}
                    >
                        Добавить
                    </button>
                    {!isTasksLoading
                        ? tasks.map((task: ITask) => (
                              <Task {...task} key={task.id} />
                          ))
                        : null}
                </div>
            </Box>
            {isFormOpen ? <TaskForm onSubmit={submitHandler} /> : null}
        </>
    );
};
