import {CHANGE_RATINGS,MOVIES_INIT} from '../constants/actionTypes.js'

export function initMovies({data}){
  return {
    type: MOVIES_INIT,
    payload: data
  }
}

export const moviesAPI = () => (dispatch,getState) => {
  fetch("http://www.mocky.io/v2/5acdd8593200005000776906").then((res) => res.json()).then((data)=>{
    dispatch(initMovies({data}))
  })
}

export function changeRatings({ratings,id}){
  return {
    type: CHANGE_RATINGS,
    ratings,
    id
  }
}
