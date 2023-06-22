import { combineReducers } from 'redux';
import missionsSlice from '../redux/missions/missionsSlice';
import RocketSlice from '../redux/Rocket/RocketSlice';

const rootReducer = combineReducers({
  missions: missionsSlice,
  rockets: RocketSlice,
});

export default rootReducer;
