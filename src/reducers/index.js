import { combineReducers } from 'redux';
import fuelSavings from './fuelSavingsReducer';
import ReactTrainingHomeReducer from './reactTrainingReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  fuelSavings,
  routing: routerReducer,
  reactTrainingStore: ReactTrainingHomeReducer,
});

export default rootReducer;
