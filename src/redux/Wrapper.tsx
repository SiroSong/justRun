import React from 'react'
import { Consumer } from './redux'
import { ReduxType } from './type'

export const Wrapper = (mapStateToProps: Function) => (WrappedComponent: Function) => {
    return class extends React.Component {
        
        render () {
            return (
                <Consumer>
                    {
                        (data: any) => {
                            let newData: object = mapStateToProps(data.getState())
                            return <WrappedComponent {...this.props} {...newData} dispatch={data.dispatch} />
                        }
                    }
                </Consumer>
            )
        }
    }
}