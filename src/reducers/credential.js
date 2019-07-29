const initialState = {
  username: null,
  token: null,
  token_type: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "set_username":
      return { ...state, username: action.username };


    case "set_token":
      return { ...state, token: action.token };

    case "set_token_type":
      return { ...state, token_type: action.token_type };

    default:
      return state;
  }
};
