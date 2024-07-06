const initialState = [];

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITES':
      return [...state, action.product];
    case 'REMOVE_FROM_FAVORITES':
      return state.filter(item => item.id !== action.productId);
    default:
      return state;
  }
};

export default favoritesReducer;
