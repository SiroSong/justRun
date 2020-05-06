import React from 'react'
import { ActionType } from './type'

const MainContext = React.createContext({})

const createStore = (reducer: Function) => {
    let state: object | null = null
    const listeners: Function[] = []
    const subscribe = (listener: Function) => listeners.push(listener)
    const getState = () => state
    const dispatch = (action: ActionType) => {
        state = reducer(state, action)
        listeners.forEach(listener => listener())
    }
    dispatch({type: 'init', payload: {}})
    
    return { dispatch, getState, subscribe }
}

export { createStore, MainContext }