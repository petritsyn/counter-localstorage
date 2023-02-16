import React from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./bll/redux";
import {incrementAC} from "./bll/counter-reducer";

const App = () => {

    let value = useSelector<AppRootStateType, number>(store => store.counter.value)
    let dispatch = useDispatch()

    const onClickHandler = () => {
        dispatch(incrementAC())
    }

    return <div>
        <div>{value}</div>
        <div><button onClick={onClickHandler}>inc</button></div>
    </div>
}

export default App;
