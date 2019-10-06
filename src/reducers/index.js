import {combineReducers} from 'redux';
import changeCategoryReducer from './changeCategoryReducer';
import categoryListReducer from './categoryListReducer';
import machineListReducer from './machineListReducer';

const rootReducer = combineReducers({
  changeCategoryReducer,
  categoryListReducer,
  machineListReducer
});

export default rootReducer;
