import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import itemsReducer from './itemsReducer';

const rootReducer = combineReducers({
  formBuilder: itemsReducer,
  forms: formReducer
});

export default rootReducer;
