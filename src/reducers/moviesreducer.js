import {moviesActionType} from '../constants/actionTypes.js'

const initState = {
  byId:{

  },
  allMovies:[]
}


const movies = (state=initState,action)  =>{
  switch(action.type){
    case moviesActionType.MOVIES_INIT:
    return {...action.payload}

    case moviesActionType.CHANGE_RATINGS:
    console.log(action)
    return {
      ...state,
      byId:{
        ...state.byId,
        [action.payload.id]:{
          ...state.byId[action.payload.id],
          ratings: action.payload.ratings
        }
      }
    }

    default:
    return state;
  }
}

export default movies;
