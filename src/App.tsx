import React, {useEffect} from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./bll/redux";
import {getValueTC, incrementAC, incrementTC} from "./bll/counter-reducer";
import {useAppDispatch} from "./hooks";

const App: React.FC = () => {

    let value = useSelector<AppRootStateType, number>(store => store.counter.value)
    let dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getValueTC())
    }, [])

    const onClickHandler = () => {
        dispatch(incrementTC())
    }

    return <div className={'app'}>
        <div>{value}</div>
        <div><button onClick={onClickHandler}>inc</button></div>
    </div>
}

export default App;
