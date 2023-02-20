import React from 'react';
import './App.css';
import {useSelector} from "react-redux";
import {AppRootStateType} from "./bll/redux";
import {incrementAC} from "./bll/counter-reducer";
import {useAppDispatch} from "./hooks";

const App: React.FC = () => {

    let value = useSelector<AppRootStateType, number>(store => store.counter.value)
    let dispatch = useAppDispatch()

    const onClickHandler = () => {
        dispatch(incrementAC())
    }

    return <div className={'app'}>
        <div>{value}</div>
        <div><button onClick={onClickHandler}>inc</button></div>
    </div>
}

export default App;
