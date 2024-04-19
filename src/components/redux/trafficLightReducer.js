const initialState = {
    timing: undefined,
    color: undefined
};

const trafficLightReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_COLOR':
            return {
                ...state,
                color: action.payload
            };
        case 'CONFIG_TIMING':
            return {
                ...state,
                timing: action.payload
            };
        default:
            return state;
    }
};

export default trafficLightReducer;
