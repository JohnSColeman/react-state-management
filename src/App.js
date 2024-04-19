import './App.css';
import TrafficLight from "./components/react/TrafficLight";
import ReduxTrafficLight from "./components/redux/ReduxTrafficLight";
import XStateTrafficLight from "./components/xstate/XStateTrafficLight";
import ZustandTrafficLight from "./components/zustand/ZustandTrafficLight";
import {Provider} from "react-redux";
import reduxStore from './components/redux/reduxStore';


function App() {
    return (
        <Provider store={reduxStore}>
            <div className="App" style={{ display: 'flex', flexDirection: 'row' }}>
                <TrafficLight/>
                <ReduxTrafficLight/>
                <ZustandTrafficLight/>
                <XStateTrafficLight/>
            </div>
        </Provider>
    );
}

export default App;
