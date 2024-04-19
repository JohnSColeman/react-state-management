import React, {useEffect} from 'react';
import '../lights.css';
import TrafficLightStates from "../../model/trafficLightStates";
import useZustandStore from "./useZustandStore";


const ZustandTrafficLight = () => {
    const { timing, color, fetchConfig, changeColor } = useZustandStore();
    const red = color === TrafficLightStates.RED || color === TrafficLightStates.RED_AMBER;
    const amber = color === TrafficLightStates.RED_AMBER || color === TrafficLightStates.AMBER;
    const green = color === TrafficLightStates.GREEN;

    useEffect(() => {
        fetchConfig(); // Fetch timing configuration on component mount
    }, [fetchConfig]);

    useEffect(() => {
        if (timing) {
            changeColor();
        }
    }, [timing, color, changeColor]);

    return (
        <div className="traffic-light">
            <div className={`light red ${red ? 'active' : ''}`}></div>
            <div className={`light yellow ${amber ? 'active' : ''}`}></div>
            <div className={`light green ${green ? 'active' : ''}`}></div>
        </div>
    );
};

export default ZustandTrafficLight;
