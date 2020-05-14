import React from 'react'
import { MainContext } from './redux'

export const Wrapper = (mapStateToProps: Function) => (WrappedComponent: Function) => {
    return class WrapperComponent extends React.Component {

        state = {}

        static contextType = MainContext

        componentWillMount () {
            const { subscribe }: ReduxType = this.context

            this._update()
            subscribe(this._update)
        }

        _update = () => {
            const { getState }: ReduxType = this.context

            this.setState({ ...mapStateToProps(getState()) })
        }
        
        render () {
            const { dispatch }: ReduxType = this.context

            return (
                <WrappedComponent {...this.props} {...this.state} dispatch={dispatch} />
            )
        }
    }
}