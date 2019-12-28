import React from 'react'
import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import { IProps } from './type'
import { Consumer } from '../../redux/redux';
import { Wrapper } from '../../redux/Wrapper'

class Home extends React.Component {

    componentWillMount () {

    }

    componentDidMount () {
        console.log(this.props, '-------')
    }

    render () {

        return (
            <div>
                <Link to="/aout">2asdf22</Link>
                <Route exact path="/aout" render={()=><div>2333333</div>}></Route>
            </div>
        )
    }
}

export default Wrapper((state: Object) => state)(Home)