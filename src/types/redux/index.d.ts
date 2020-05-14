interface ActionType {
  type: string,
  payload?: any
}

interface ReduxType {
  dispatch: dispatch,
  getState: Function,
  subscribe: Function,
  children: any
}

interface dispatch {
  (action: ActionType): void
}

