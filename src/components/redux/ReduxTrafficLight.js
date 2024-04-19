import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import TrafficLightStates from "../../model/trafficLightStates";
import {doChangeColor} from "./trafficLightActions";

/**
 * A Redux traffic light component based on useDispatch, useSelector and useEffect.
 *
 * @return {JSX.Element}
 * @constructor
 */
const ReduxTrafficLight = () => {
    const dispatch = useDispatch();
    const color = useSelector(state => state.trafficLight.color);
    const red = color === TrafficLightStates.RED || color === TrafficLightStates.RED_AMBER;
    const amber = color === TrafficLightStates.RED_AMBER || color === TrafficLightStates.AMBER;
    const green = color === TrafficLightStates.GREEN;

    useEffect(() => {
        dispatch(doChangeColor());
    }, [color, dispatch]);

    return (
        <div className="traffic-light">
            <div className={`light red ${red ? 'active' : ''}`}></div>
            <div className={`light yellow ${amber ? 'active' : ''}`}></div>
            <div className={`light green ${green ? 'active' : ''}`}></div>
        </div>
    );
};

export default ReduxTrafficLight;
