import React from 'react'
import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import { Wrapper } from '../../redux/Wrapper'
import { Button } from 'antd';

interface Iprops {
    dispatch: Function,
    num: number
}

class Home extends React.Component<Iprops> {

    componentWillMount () {

    }

    componentDidMount () {
        console.log(this.props, '-------')
    }

    clickHandle = () => {
        this.props.dispatch({
            type: 'add',
        })
    }

    render () {

        return (
            <div>
                <Link to="/aout">2asdf22</Link>
                <Route exact path="/aout" render={()=><div>2333333</div>}></Route>
                <div>{this.props.num}</div>
                <Button onClick={this.clickHandle}>test</Button>
            </div>
        )
    }
}

export default Wrapper((state: Object) => state)(Home)