import {moviesActionType} from '../constants/actionTypes.js'

const moviesAction = {
  initMovies: ({data})=>({
      type: moviesActionType.MOVIES_INIT,
      payload: data
    }),

  moviesAPI: () => (dispatch) => {
    fetch("http://www.mocky.io/v2/5acdd8593200005000776906").then((res) => res.json()).then((data)=>{
      dispatch(moviesAction.initMovies({data}))
    });
  },

  changeRatings: (data)=>({type:moviesActionType.CHANGE_RATINGS,payload:data})
}

export {moviesAction}
