import React from 'react';
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import _ from 'lodash';
import {DataType} from "../../api/api";
import Main from "./Main";

const MainContainer = () => {

    const {search, items, pageSize, currentPage} = useSelector((store: AppStateType) => store.table)

    let filterPage = items.filter((item: DataType) => {
        return (
            item.firstName.toLowerCase().includes(search.toLowerCase())
            || item.lastName.toLowerCase().includes(search.toLowerCase())
            || item.email.toLowerCase().includes(search.toLowerCase())
        )
    })

    let page = _.chunk(filterPage, pageSize)[currentPage]

    return <Main
        search={search}
        page={page}
        items={filterPage}
        pageSize={pageSize}
        currentPage={currentPage}/>
}

export default React.memo(MainContainer);
