import React from 'react'
import { ActionType } from './type'

const { Provider, Consumer } = React.createContext({})

const createStore = (reducer: Function, state = {}) => {
    const listeners: Function[] = []
    const subscribe = (listener: Function) => listeners.push(listener)
    const getState = () => state
    const dispatch = (action: ActionType) => {
        state = reducer(state, action)
        listeners.forEach(listener => listener())
    }

    return { dispatch, getState, subscribe }
}

export { createStore, Provider, Consumer }

