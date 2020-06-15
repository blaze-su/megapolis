import { ITaskActionTypes, ITaskState, deleteTask } from "store/task";

import { HOST_API } from "keys";
import { ITask } from "types";
import { Link } from "react-router-dom";
import React from "react";
import { ThunkDispatch } from "redux-thunk";
import { fetchTasks } from "store/tasks";
import style from "./Task.module.scss";
import { useDispatch } from "react-redux";

export const Task = (props: ITask) => {
    const { id, title } = props;
    console.log("task_props", props);

    const dispatch: ThunkDispatch<
        ITaskState,
        unknown,
        ITaskActionTypes
    > = useDispatch();

    const deleteHanler = () => {
        const deleteUrl = `${HOST_API}/list/${id}`;
        const fetchUrl = `${HOST_API}/list/`;

        dispatch(deleteTask(deleteUrl)).then(() =>
            dispatch(fetchTasks(fetchUrl))
        );

        return;
    };

    return (
        <div className={style.item}>
            <div className={style.title}>Задача №{id}</div>
            <div className={style.description}>{title}</div>
            <div className={style.actions}>
                <Link to={`/edit/${id}`} className={style.btn}>
                    <img
                        className={style.icon}
                        src="/images/icons/edit.svg"
                        alt="редактировать"
                        title="редактировать"
                    />
                </Link>
                <button className={style.btn} onClick={() => deleteHanler()}>
                    <img
                        className={style.icon}
                        src="/images/icons/delete.svg"
                        alt="редактировать"
                        title="редактировать"
                    />
                </button>
            </div>
        </div>
    );
};
