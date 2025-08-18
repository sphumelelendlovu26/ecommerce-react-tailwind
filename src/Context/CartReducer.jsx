const CartReducer = (state, action) => {
  switch (action.type) {
    case "Add": {
      const itemExists = state.find((item) => item.id === action.payload.id);
      if (itemExists) {
        return state;
      }
      return [...state, action.payload];
    }
    case "Remove":
      return state.filter((item) => item.id !== action.payload.id);
    default:
      return state;
  }
};
export default CartReducer;
