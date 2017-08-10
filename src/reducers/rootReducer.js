import { combineForms } from 'react-redux-form';

import itemsReducer from './itemsReducer';

const rootReducer = combineForms({
  formBuilder: itemsReducer,
  customizerForm: {}
});

export default rootReducer;
