import {assign, createMachine, fromPromise} from 'xstate';
import {retrieveLightTiming} from '../../config/lightTiming';


const trafficLightMachine = createMachine({
    id: 'trafficLight',
    initial: 'loading',
    context: {
        timing: null
    },
    states: {
        loading: {
            invoke: {
                src: 'retrieveTiming',
                onDone: {target: 'red', actions: 'setTiming'},
            },
        },
        red: {
            after: {
                redDelay: 'red_amber',
            },
        },
        red_amber: {
            after: {
                redAmberDelay: 'green',
            },
        },
        green: {
            after: {
                greenDelay: 'amber',
            },
        },
        amber: {
            after: {
                amberDelay: 'red',
            },
        },
    },
}, {
    actions: {
        setTiming: assign({timing: ({event}) => event.output}),
    },
    delays: {
        redDelay: ({context}) => context.timing?.red || 5000,
        redAmberDelay: ({context}) => context.timing?.red_amber || 5000,
        greenDelay: ({context}) => context.timing?.green || 5000,
        amberDelay: ({context}) => context.timing?.amber || 5000,
    },
    actors: {
        retrieveTiming: fromPromise(() => retrieveLightTiming()),
    },
});


export default trafficLightMachine;
