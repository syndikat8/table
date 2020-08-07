import React, {useState} from 'react';
import styles from './Form.module.css';
import TableReduxForm, {FormPropsType} from "./FormItem/FormItem";
import {useDispatch} from "react-redux";
import {actions} from '../../../redux/table-reducer';

const Form = () => {

    const [isSee, setIsSee] = useState(false)

    const dispatch = useDispatch()

    const onSubmit = (formData: FormPropsType) => {
        const item = {
            id: formData.id,
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            phone: formData.phone,
            address: {
                streetAddress: "3345 Hendrerit St",
                city: "Delray",
                state: "NY",
                zip: "31173"
            },
            description: "lorem"
        }
        dispatch(actions.addItem(item))
    }

    const onButtonCLick = () => setIsSee(true)

    return (
        <div className={styles.container}>
            <div className={styles.form}>
                {isSee && <TableReduxForm  onSubmit={onSubmit}/>}
            </div>
            <button onClick={onButtonCLick} type="button" className="btn btn-info">ADD</button>
        </div>
    )
}

export default React.memo(Form);
