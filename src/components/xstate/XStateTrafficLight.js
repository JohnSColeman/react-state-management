import React from 'react';
import {useMachine} from '@xstate/react';
import trafficLightMachine from './trafficLightMachine';

/**
 * An XState traffic light component based on useMachine.
 * The side effects and state transitions are encapsulated in the machine so this component has only view code.
 *
 * @return {JSX.Element}
 * @constructor
 */
const XStateTrafficLight = () => {
    const [state] = useMachine(trafficLightMachine);
    const red = state.matches('red') || state.matches('red_amber');
    const amber = state.matches('red_amber') || state.matches('amber');
    const green = state.matches('green');

    return (
        <div className="traffic-light">
            <div className={`light red ${red ? 'active' : ''}`}></div>
            <div className={`light yellow ${amber ? 'active' : ''}`}></div>
            <div className={`light green ${green ? 'active' : ''}`}></div>
        </div>
    );
};

export default XStateTrafficLight;
