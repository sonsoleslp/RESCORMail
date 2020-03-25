import {combineReducers} from 'redux';
import userProfileReducer from './userProfileReducer';

const GlobalState = combineReducers({
  user_profile:userProfileReducer,
});

export default GlobalState;