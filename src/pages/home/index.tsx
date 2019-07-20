import React from 'react'
import { Route } from 'react-router';
import { Link } from 'react-router-dom';

const Home:React.FC = (props) => {
  return (
    <div>hell0
      <Link to="/aout">22222</Link>
      <Route exact path="/aout" render={()=> <div>2333333</div>}></Route>
    </div>
    
  )
}

export default Home