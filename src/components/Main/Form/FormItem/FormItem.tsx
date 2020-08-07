import React from 'react';
import styles from './FormItem.module.css';
import {formValueSelector, Field} from "redux-form";
import {reduxForm} from "redux-form";
import {InjectedFormProps} from "redux-form";
import {useSelector} from "react-redux";

export type FormPropsType = {
    id: number
    firstName: string
    lastName: string
    email: string
    phone: string
}

const FormItem: React.FC<{} & InjectedFormProps<FormPropsType, {}>> = ({handleSubmit}) => {

    let state = useSelector(state=> state)

    const selector = formValueSelector('table')
    const id = selector(state, 'id')
    const firstName = selector(state, 'firstName')
    const lastName = selector(state, 'lastName')
    const email = selector(state, 'email')
    const phone = selector(state, 'phone')

    return (
        <form onSubmit={handleSubmit} className={styles.container}>
            <Field placeholder="ID" name="id" component={"input"} />
            <Field placeholder="firstName " name="firstName" component={"input"}/>
            <Field placeholder="lastName" name="lastName" component={"input"}/>
            <Field placeholder="email" name="email" component={"input"}/>
            <Field placeholder="phone" name="phone" component={"input"}/>
            <button disabled={!id || !firstName || !lastName || !email || !phone} className="btn btn-info">ADD TO TABLE</button>
        </form>
    )
}

const TableReduxForm = reduxForm<FormPropsType, {}>({
    form: 'table',

})(FormItem)

export default TableReduxForm;

