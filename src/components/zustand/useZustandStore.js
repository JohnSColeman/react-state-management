import {create} from 'zustand';
import {retrieveLightTiming} from '../../config/lightTiming';
import {delay} from '../../utils/delay';
import TrafficLightStates from "../../model/trafficLightStates";


const useZustandStore = create((set, get) => ({
    timing: undefined,
    color: TrafficLightStates.RED,
    fetchConfig: async () => {
        const timingResponse = await retrieveLightTiming();
        set({ timing: timingResponse });
    },
    changeColor: async () => {
        await delay(get().timing[get().color]);
        switch (get().color) {
            case TrafficLightStates.RED:
                set( ({ color: TrafficLightStates.RED_AMBER }));
                break;
            case TrafficLightStates.RED_AMBER:
                set(({ color: TrafficLightStates.GREEN }));
                break;
            case TrafficLightStates.AMBER:
                set(({ color: TrafficLightStates.RED }));
                break;
            case TrafficLightStates.GREEN:
                set( ({ color: TrafficLightStates.AMBER }));
                break;
            default:
                set(({ color: TrafficLightStates.RED }));
        }
    }
}));

export default useZustandStore;