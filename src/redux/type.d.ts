import { ReactNode } from "react";

export interface ActionType {
    type: string,
    payload: Object
}

export interface ReduxType {
    dispatch: ActionType,
    getState: Function,
    subscribe: Function,
    children: ReactNode
}