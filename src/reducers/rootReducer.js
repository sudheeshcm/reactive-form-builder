// import { combineReducers } from 'redux';
// import { reducer as formReducer } from 'redux-form';
import { combineForms } from 'react-redux-form';

import itemsReducer from './itemsReducer';

const initialFormState = {
  id: 2,
  element: 'Header',
  text: 'It works',
  static: true,
  color: 'orange'
};

const rootReducer = combineForms({
  formBuilder: itemsReducer,
  forms: initialFormState
});

/* const rootReducer = combineReducers({
  formBuilder: itemsReducer,
  deep: combineForms({
    formBuilder: itemsReducer,
    forms: initialFormState
  }, 'deep')
}); */

export default rootReducer;
