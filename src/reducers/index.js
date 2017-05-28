import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

/*
The combineReducers fucntion creates a piece
of state that has the name of your key in the
key value pair
*/

export default combineReducers({
    libraries: LibraryReducer,
    selectedId: SelectionReducer
});
