import React, {useCallback, useMemo, useState} from 'react';
import styles from './Main.module.css';
import Form from "./Form/Form";
import {DataType} from "../../api/api";
import Search from "./Search/Search";
import Table from "./Table/Table";
import RowInformation from "./RowInformation/RowInformation";
import {useDispatch} from "react-redux";
import {actions} from "../../redux/table-reducer";
import Paginator from './Pagination/Pagination';

type PropsType = {
    page: Array<DataType>
    items: Array<DataType>
    search: string
    pageSize: number
    currentPage: number
}

const Main: React.FC<PropsType> = ({search, page, items, pageSize, currentPage}) => {

    const dispatch = useDispatch()

    const [sortItems, setSortItems] = useState(page)
    const [sortOrder, setSortOrder] = useState(true)
    const [sortProperty, setSortProperty] = useState()

    const onSort = useMemo(() => {
            const sort = (title: string) => {
                setSortProperty(title)
                if (sortOrder) {
                    const newSortItems = page.sort((a: any, b: any) => a[title] > b[title] ? 1 : -1)
                    setSortOrder(false)
                    return setSortItems([...newSortItems])
                } else {
                    const newSortItems = page.sort((a: any, b: any) => a[title] > b[title] ? 1 : -1).reverse()
                    setSortOrder(true)
                    return setSortItems([...newSortItems])
                }
            }
            return sort
        }
        , [sortOrder, page])


    const onPageChanged = useCallback((p: number) => dispatch(actions.setCurrentPage(p)), [dispatch])

    const [rowInformation, setRowInformation] = useState()

    const onclickRow = (newRow: DataType) => setRowInformation(newRow)

    const onSearch = useCallback((e: string) => dispatch(actions.search(e)), [dispatch])

    return <div className={styles.main}>
        <Search onSearch={onSearch} search={search}/>
        <Form/>
        <Table page={page}
               sortOrder={sortOrder}
               sortProperty={sortProperty}
               onclickRow={onclickRow}
               onSort={onSort}/>
        <div className={styles.wrap}>

            <div className={styles.rowInformation}>
                {rowInformation && <RowInformation rowInformation={rowInformation}/>}
            </div>

            <Paginator
                items={items}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChanged={onPageChanged}/>
        </div>
    </div>
}

export default React.memo(Main);
