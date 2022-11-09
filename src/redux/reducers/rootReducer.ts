import { combineReducers } from 'redux';
import menuReducer from './menuReducer/reducer';

export const rootReducer = combineReducers({
  menu: menuReducer,
});

export type TRootState = ReturnType<typeof rootReducer>;
