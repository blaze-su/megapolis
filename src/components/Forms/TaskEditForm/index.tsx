import { Field, WrappedFieldProps, reduxForm } from "redux-form";
import React, { useState } from "react";

import { Link } from "react-router-dom";
import style from "./TaskEditForm.module.scss";
import { toggleTaskForm } from "store/toggle";
import { useDispatch } from "react-redux";

type Validator = string | undefined;
export const required = (value: string): Validator =>
    value ? undefined : "Заголовок не может быть пустым";

interface RenderFieldProps extends WrappedFieldProps {
    placeholder?: string;
    type: string;
    label: string;
    // changeHandler?: (e: any) => void;
}

export const renderField = (props: RenderFieldProps) => {
    const {
        input,
        label,
        type,
        placeholder,
        //changeHandler,
        meta: { touched, error },
    } = props;

    return (
        <div className={style.field}>
            <label className={style.descriptionText}>{label}</label>
            <div className={style.field}>
                <input
                    className={style.input__text}
                    {...input}
                    placeholder={placeholder}
                    type={type}
                />
                {touched && error && (
                    <span className={style.field__error}>{error}</span>
                )}
            </div>
        </div>
    );
};

const Form = (props: any) => {
    const [isEdit, setIsEdit] = useState(false);
    const { handleSubmit, initialValues } = props;
    const dispatch = useDispatch();

    const changeHandler = (e: any) => {
        if (initialValues.title == e.target.value) {
            setIsEdit(false);
        } else {
            setIsEdit(true);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Field
                label={"Важная задача"}
                name="title"
                component={renderField}
                type="text"
                validate={required}
                onChange={changeHandler}
            />

            <div>
                {isEdit ? (
                    <button className={style.button__green}>Сохранить</button>
                ) : (
                    <Link className={style.button__blue} to="/">
                        Вернутья в список
                    </Link>
                )}
            </div>
        </form>
    );
};

export const TaskEditForm = reduxForm({
    form: "taskEditForm",
})(Form);
