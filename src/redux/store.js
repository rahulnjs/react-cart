import { createStore } from 'redux';
import { rootReducer } from './root-reducer';
import { loadBooksAction } from './actions';


const store = createStore(rootReducer);
store.dispatch(loadBooksAction());

export default store;