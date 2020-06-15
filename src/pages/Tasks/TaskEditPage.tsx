import { ITaskActionTypes, ITaskState, updateTask } from "store/task";
import { Link, useHistory, useParams } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Box } from "components/Box";
import { HOST_API } from "keys";
import { ITask } from "types";
import { TaskEditForm } from "components/Forms/TaskEditForm";
import { ThunkDispatch } from "redux-thunk";
import { fetchTasks } from "store/tasks";
import style from "./TaskEditPage.module.scss";
import { title } from "process";

export const TaskEditPage = (props: any) => {
    const { taskId } = useParams();
    const history = useHistory();

    const dispatch: ThunkDispatch<
    ITaskState,
    unknown,
    ITaskActionTypes
> = useDispatch();

    const url: string = `${HOST_API}/list/`;
    useEffect((): any => dispatch(fetchTasks(url)), [url, dispatch]);
    const tasksReducer = useSelector((store: any) => store.tasksReducer);
    const { tasks, isTaskLoading } = tasksReducer;

    console.log("tasks", tasks);
    getTaskById(tasks, taskId);

    const task = getTaskById(tasks, taskId);
    if (typeof task === "undefined") return null;

    const submitHandler = (values: any) => {
        
        const editUrl: string = `${HOST_API}/list/${taskId}`;
        dispatch(updateTask(editUrl, values as ITask)).then(() => {
            history.push("/");
            console.log(values);
        })
    };


    return (
        <Box>
            {isTaskLoading ? (
                <>
                    <h2>Задача №{task.id}</h2>
                    <TaskEditForm onSubmit={submitHandler} initialValues={task} />
                </>
            ) : null}
        </Box>
    );
};

const getTaskById = (tasks: ITask[], taskId: string): ITask | undefined => {
    if (!tasks) return undefined;
    const task = tasks.filter((task: ITask) => {
        return task.id == taskId;
    })[0];

    console.log("task", task);
    return task;
};
