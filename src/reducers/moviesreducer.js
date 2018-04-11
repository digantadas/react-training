import {CHANGE_RATINGS,MOVIES_INIT} from '../constants/actionTypes.js'

const initState = {
  byId:{
    '1234':{
      id: 1234,
      name : "Random Movie",
      ratings : 4,
      imageURL : 'https://smartrenewableheat.com/wp-content/uploads/2018/02/image-placeholder.png',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
  },
  allMovies:['1234']
}
const movies = (state=initState,action)  =>{
  switch(action.type){
    case MOVIES_INIT:
    return state;

    case CHANGE_RATINGS:
    return state;

    default:
    return state;
  }
}

export default movies;
