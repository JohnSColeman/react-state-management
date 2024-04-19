import {applyMiddleware, configureStore} from '@reduxjs/toolkit';
import {thunk} from 'redux-thunk';
import trafficLightReducer from './trafficLightReducer';


const reduxStore = configureStore({
    reducer: {
        trafficLight: trafficLightReducer
    }
}, applyMiddleware(thunk));

export default reduxStore;
