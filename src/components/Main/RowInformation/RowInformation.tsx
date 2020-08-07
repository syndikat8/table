import React from 'react';
import {DataType} from "../../../api/api";
import styles from './RowInformation.module.css';

type PropsType = {
    rowInformation: DataType
}

const RowInformation: React.FC<PropsType> = ({rowInformation}) => {
    return (
        <div className={styles.rowInformation} >
            <div>Выбран пользователь: <b>{rowInformation.firstName} {rowInformation.lastName} </b></div>
            <div>Описание:</div>
            <textarea className="form-control" cols={30} rows={10} defaultValue={rowInformation.description}/>
            <div>Адрес проживания: <b>{rowInformation.address.streetAddress}</b></div>
            <div>Город: <b>{rowInformation.address.city}</b></div>
            <div>Провинция/штат: <b>{rowInformation.address.state}</b></div>
            <div>Провинция/штат: <b>{rowInformation.address.zip}</b></div>
        </div>
    )
}

export default React.memo(RowInformation);
