import {retrieveLightTiming} from "../../config/lightTiming";
import TrafficLightStates from "../../model/trafficLightStates";
import {delay} from "../../utils/delay";

export const changeColor = (color) => ({
    type: 'CHANGE_COLOR',
    payload: color
});

export const configTiming = (timing) => ({
    type: 'CONFIG_TIMING',
    payload: timing
});

export const doChangeColor = () => {
    return async (dispatch, getState) => {
        const {timing, color} = getState().trafficLight;
        if (!timing) {
            const timing = await retrieveLightTiming();
            dispatch(configTiming(timing));
        }
        switch (color) {
            case TrafficLightStates.RED:
                await delay(timing.red);
                dispatch(changeColor(TrafficLightStates.RED_AMBER));
                break;
            case TrafficLightStates.RED_AMBER:
                await delay(timing.red_amber);
                dispatch(changeColor(TrafficLightStates.GREEN));
                break;
            case TrafficLightStates.AMBER:
                await delay(timing.amber);
                dispatch(changeColor(TrafficLightStates.RED));
                break;
            case TrafficLightStates.GREEN:
                await delay(timing.green);
                dispatch(changeColor(TrafficLightStates.AMBER));
                break;
            default:
                dispatch(changeColor(TrafficLightStates.RED));
        }
    };
};