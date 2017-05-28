/*
action creators return actions
the type property ensures only correct action is called
they are used to inform reducer on what we intend to do
*/

export const selectLibrary = (libraryId) => {
  return {
      type: 'select_library',
      payload: libraryId
  };
};
