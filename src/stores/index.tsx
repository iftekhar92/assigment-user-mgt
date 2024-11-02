import React, { createContext, useContext, useReducer } from 'react';

type Props = {
    reducer: any;
    initialState: any;
    children: React.ReactNode
}

const StateContext = createContext({});

export const useStateValue = () => useContext(StateContext)

const StateProvider: React.FC<Props> = ({ reducer, initialState, children }) => <StateContext.Provider value={useReducer(reducer, initialState)}>{children}</StateContext.Provider>

export default StateProvider