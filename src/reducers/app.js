const initialState = {
  screen: null,
  data_user: {},
  primary_card: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "change_screen":
      return { ...state, screen: action.screen };

    case "set_data_user":
      return { ...state, data_user: action.data_user };

    case "set_primary_card":
      return { ...state, primary_card: action.primary_card };

    default:
      return state;
  }
};
