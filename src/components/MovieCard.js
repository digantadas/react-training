import React from 'react'
import { connect } from 'react-redux'
import {PropTypes} from 'prop-types'
import {moviesAction} from '../actions/moviesActions.js'


class MovieCard extends React.Component{


  handleRatings = (ratings,id) =>{
    this.props.dispatch(moviesAction.changeRatings({ratings,id}))
  }

  render(){

    const {data,ratingsArr} = this.props
    console.log("render")
    return(
    <div className='movie-tile'>
    <div className="movie-image"><img src={data.imageURL}/></div>
    <div className="movie-info">
    <p>{data.name}</p>
    <div id="text-flow">
    <p>{data.desc}</p>
    </div>
    <div className="star-ratings-tab">
    {ratingsArr.map((star,index)=>(<div key={index} onClick={(e)=>{this.handleRatings(index+1,parseInt(data.id))}} className={star}>★</div>)
    )}
    <div className='numeric-ratings'>{data.ratings}</div>
    </div>

    </div>
    </div>
  )
  }

  }

const matchStateToProps = (state,own) => {
  console.log(state)
  let arr = ['star','star','star','star','star']
  const rating = own.data.ratings
  arr = arr.map((star,index)=>{
    if(index <= rating -1){
      return 'star-filled'
    }else{
      return 'star'
    }
  })
  return {...own,ratingsArr:arr}
}


export default connect(matchStateToProps)(MovieCard)
