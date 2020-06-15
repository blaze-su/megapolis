import { Field, WrappedFieldProps, reduxForm } from "redux-form";

import React from "react";
import style from "./TaskForm.module.scss";
import { toggleTaskForm } from "store/toggle";
import { useDispatch } from "react-redux";

type Validator = string | undefined;
export const required = (value: string): Validator =>
    value ? undefined : "Заголовок не может быть пустым";

interface RenderFieldProps extends WrappedFieldProps {
    placeholder?: string;
    type: string;
    label: string;
}

export const renderField = (props: RenderFieldProps) => {
    const {
        input,
        label,
        type,
        placeholder,
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
    const { handleSubmit } = props;
    const dispatch = useDispatch();

    return (
        <div className={style.modal}>
            <div className={style.modal__box}>
                <form onSubmit={handleSubmit}>
                    <button
                        className={style.modal__close}
                        onClick={() => dispatch(toggleTaskForm(false))}
                    >
                        <img
                            className={style.modal__icon}
                            src="/images/icons/close.svg"
                            alt="редактировать"
                            title="редактировать"
                        />
                    </button>

                    <Field
                        label={"Важная задача"}
                        name="title"
                        component={renderField}
                        type="text"
                        validate={required}
                    />

                    <div className={style.right}>
                        <button className={style.button__green}>Создать</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export const TaskForm = reduxForm({
    form: "taskForm",
})(Form);
