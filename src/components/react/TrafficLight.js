import React, {useEffect, useState} from 'react';
import '../lights.css';
import TrafficLightStates from "../../model/trafficLightStates";
import {retrieveLightTiming} from '../../config/lightTiming';
import {delay} from '../../utils/delay';

/**
 * A plain React traffic light component based on useState and useEffect.
 * 
 * @return {JSX.Element}
 * @constructor
 */
const TrafficLight = () => {
    const [timing, setTiming] = useState(undefined);
    const [color, setColor] = useState(TrafficLightStates.RED); // infinite state
    const red = color === TrafficLightStates.RED || color === TrafficLightStates.RED_AMBER;
    const amber = color === TrafficLightStates.RED_AMBER || color === TrafficLightStates.AMBER;
    const green = color === TrafficLightStates.GREEN;
    
    useEffect(() => {
        async function fetchConfig() {
            const timingResponse = await retrieveLightTiming();
            setTiming(timingResponse);
        }
        fetchConfig();
    }, []);

    const changeColor = async () => {
        switch (color) {
            case TrafficLightStates.RED:
                await delay(timing.red);
                setColor(TrafficLightStates.RED_AMBER);
                break;
            case TrafficLightStates.RED_AMBER:
                await delay(timing.red_amber);
                setColor(TrafficLightStates.GREEN);
                break;
            case TrafficLightStates.AMBER:
                await delay(timing.amber);
                setColor(TrafficLightStates.RED);
                break;
            case TrafficLightStates.GREEN:
                await delay(timing.green);
                setColor(TrafficLightStates.AMBER);
                break;
            default:
                setColor(TrafficLightStates.RED);
        }
    };
    if (timing) changeColor();
    return (
        <div className="traffic-light">
            <div className={`light red ${red ? 'active' : ''}`}></div>
            <div className={`light yellow ${amber ? 'active' : ''}`}></div>
            <div className={`light green ${green ? 'active' : ''}`}></div>
        </div>
    );
};

export default TrafficLight;
