const initialState = [];

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingIndex = state.findIndex(item => item.id === action.product.id);
      if (existingIndex >= 0) {
        const updatedCart = [...state];
        updatedCart[existingIndex].quantity += action.product.quantity;
        return updatedCart;
      } else {
        return [...state, action.product];
      }
    case 'REMOVE_FROM_CART':
      return state.filter(item => item.id !== action.productId);
    case 'UPDATE_QUANTITY':
      return state.map(item =>
        item.id === action.productId ? { ...item, quantity: action.quantity } : item
      );
    default:
      return state;
  }
};

export default cartReducer;
