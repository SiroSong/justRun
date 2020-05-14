import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Wrapper } from '../../redux/Wrapper'
import { Button } from 'antd';
import { Props } from 'redux/home';

function Home(props: Props) {

	const clickHandle = () => {
		props.dispatch({ type: 'add' })
	}

	return (
		<div>
			<Link to="/home/about">2asdf22</Link>
			{/* <Route exact path="/about" render={() => <div>2333333</div>}></Route> */}
			<div>{props.num}</div>
			<Button onClick={clickHandle}>test</Button>
		</div>
	)
}

export default Wrapper((state: Object) => state)(Home)