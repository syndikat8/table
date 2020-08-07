import React from 'react';
import {DataType} from "../../../api/api";

type PropsType = {
    page: Array<DataType>
    onSort: (title: string) => void
    onclickRow: (e: DataType) => void
    sortProperty: string
    sortOrder: boolean
}

const Table: React.FC<PropsType> = ({page, sortProperty, sortOrder, onclickRow, onSort}) => {

    const columns = [
        {title: "id"},
        {title: "firstName"},
        {title: "lastName"},
        {title: "email"},
        {title: "phone"},
    ]

    return (
        <table className="table table-dark">
            <thead>
            <tr>
                {columns.map((column, index) => <th
                    key={index}
                    onClick={() => onSort(column.title)}
                    scope="col">
                    {column.title}
                    {sortProperty === column.title &&
                    <span>
                    {sortOrder ? <span>&uarr;</span> : <span>&darr;</span>}
                </span>}
                </th>)}
            </tr>
            </thead>
            <tbody>
            {
                page && page.map((item, index) => {
                    return (
                        <tr onClick={() => onclickRow(item)} key={`${item.id} ${index}`}>
                            <td>{item.id}</td>
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
    );
}

export default React.memo(Table);
