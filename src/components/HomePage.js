import React from 'react';
import { Link } from 'react-router-dom';
import {moviesAPI} from '../actions/moviesActions.js'
import { connect } from 'react-redux'
import MovieCard from './MovieCard.js'
class HomePage extends React.Component{

componentDidMount(){
  this.props.dispatch(moviesAPI())
}

shouldComponentUpdate(nextProp,nextState){
  console.log(nextState)
  return true;
}

render(){
const moviesArray = this.props.allMovies
const moviesObj = this.props.byId
  return (
    <div>
      <img src="https://047f018102c8c8f717a6-1efb167bc857a9871c34d9fa1ea1cbde.ssl.cf1.rackcdn.com/myevive_black.png" />
      <h1>React Training</h1>
      <h2>Get Started</h2>
      <div className="movies-container">
        {moviesArray.map((movie)=>{
          return <MovieCard key={movie} data={moviesObj[movie]} />
        })}
      </div>
      <Link to="/my-project">My Project</Link>
    </div>
  );
}
}
const mapStateToProps = (state) =>{
  return {...state.movies};
}
export default connect(mapStateToProps)(HomePage);
