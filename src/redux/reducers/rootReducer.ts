import { combineReducers } from 'redux';
import menuReducer from './menuReducer/reducer';
import carsReducer from './carsReducer/reducer';

export const rootReducer = combineReducers({
  menu: menuReducer,
  cars: carsReducer,
});

export type TRootState = ReturnType<typeof rootReducer>;
