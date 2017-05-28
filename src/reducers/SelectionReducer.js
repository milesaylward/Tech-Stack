/*
Default state to null if it is currently undefined
test for correct action.type
return state if it is any action type
other than select library
if state is equal to the current action type
return null to close current selected item
*/

export default (state = null, action) => {
  switch (action.type) {
    case 'select_library':
    if (state === action.payload) {
      return null;
    }
      return action.payload;
    default:
    return state;
  }
};
