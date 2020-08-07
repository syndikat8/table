import React, {useEffect, useState} from 'react';
import styles from './App.module.css';
import Header from "./Header/Header";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../redux/store";
import Preloader from "./common/Preloader/Preloader";
import {getItems} from "../redux/table-reducer";
import MainContainer from "./Main/MainContainer";

const App = () => {

    const {isLoading} = useSelector((store: AppStateType) => store.table)
    const dispatch = useDispatch()

    const [isHide, setIsHide] = useState(false)
    const [isSmall, setIsSmall] = useState(false)
    const [isMode, setIsMode] = useState(false)

    useEffect(() => {
        if (!isMode) {
            return
        }
        isSmall ? dispatch(getItems(32, 0)) : dispatch(getItems(1000, 3))
    }, [isMode])

    const onButtonClickSmall = () => {
        setIsMode(true)
        setIsSmall(true)
        setIsHide(true)
    }
    const onButtonClickBig = () => {
        setIsMode(true)
        setIsSmall(false)
        setIsHide(true)
    }

    return (
        <div className={styles.app}>
            {isHide
                ? isLoading ? <Preloader/> : <MainContainer/>
                : <Header onButtonClickSmall={onButtonClickSmall} onButtonClickBig={onButtonClickBig}/>}
        </div>
    );
}

export default App;
