import React from 'react'
import { connect } from 'react-redux'

class MoveTile extends React.Component{

  render(){
    <div className='movie-tile'>
    <div className="movie-image"></div>
    <div className="movie-info">
    <p>{this.props.title}</p>
    <p>{this.props.description}</p>
    </div>
    </div>
  }
}

export default connect(matchStateToProps)(MoveTile)
