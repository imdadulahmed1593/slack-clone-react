export const initialState = {
  user: null,
};

function reducer(state, action) {
  //here the state  is referring to the initialState
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
}

export default reducer;
