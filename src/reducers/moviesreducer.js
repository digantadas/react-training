import {CHANGE_RATINGS,MOVIES_INIT} from '../constants/actionTypes.js'

const initState = {
  byId:{

  },
  allMovies:[]
}


const movies = (state=initState,action)  =>{
  switch(action.type){
    case MOVIES_INIT:
    return {...action.payload}

    case CHANGE_RATINGS:
    return {
      ...state,
      byId:{
        ...state.byId,
        [action.id]:{
          ...state.byId[action.id],
          ratings: action.ratings
        }
      }
    }

    default:
    return state;
  }
}

export default movies;
