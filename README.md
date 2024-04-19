# Traffic Lights React App

This project implements a traffic light using 4 different state solutions:
- plain React useState
- Redux store
- Zustand store
- XState finite state machine

In order to provide a practical example, the traffic light functionality is controlled
by a timing configuration provided by an asynchronous call that is used to animate the
light.

Each solution has its pros and cons, here we consider the practical ones that affect development.

## React useState
### Pros
- uses standard React hooks (no learning curve)
### Cons
- view component will handle effects
- view component will contain domain logic
- effects complex if the component functionality grows
- infinite state but limited by pseudo enumeration

## Redux useSelector
### Pros
- state transition encapsulated in external context
- a thunk will contain domain logic to implement effects
### Cons
- uses Redux hooks (moderate learning curve)
- complicated because uses many hooks
- view component will handle effects
- effects complex if the component functionality grows
- infinite state but limited by pseudo enumeration

## Zustand useStore
### Pros
- state transition encapsulated in external context
- effects encapsulated in machine
- light-weight easy to learn
### Cons
- view component may handle some effects
- infinite state but limited by pseudo enumeration

## XState useMachine
### Pros
- state transition (domain logic) encapsulated in machine
- effects encapsulated in machine
- many use cases catered for
- can be visualized
- finite state can prevent unexpected states
### Cons
- high learning curve (based on actors concept)
- antithesis of flux single direction of event flow

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


