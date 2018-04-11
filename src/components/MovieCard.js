import React from 'react'
import { connect } from 'react-redux'
import {PropTypes} from 'prop-types'
import {changeRatings} from '../actions/moviesActions.js'
const  generateRatings = (rating) => {
    const arr = ['star','star','star','star','star']
    return arr.map((star,index)=>{
      if(index <= rating -1){
        return 'star-filled'
      }else{
        return 'star'
      }
    })
  }


class MovieCard extends React.Component{


  handleRatings = (ratings,id) =>{
    this.props.dispatch(changeRatings({ratings,id}))
  }

  render(){
    const data = this.props.own.data
    const ratingsArr = generateRatings(parseInt(data.ratings))
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
  return {own}
}


export default connect(matchStateToProps)(MovieCard)
