import { GiTempleDoor } from "react-icons/gi";

const CartReducer = (state, action) => {
  switch (action.type) {
    case "Add": {
      const itemExists = state.find((item) => item.id === action.payload.id);
      if (itemExists) {
        return state;
      }
      return [...state, { ...action.payload, quantity: 1 }];
    }
    case "Delete":
      return state.filter((item) => item.id !== action.payload.id);
    case "Increase": {
      const tempState = state.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
      return tempState;
    }
    case "Decrease": {
      const tempState = state.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: item.quantity - 1 };
        } else return item;
      });
      return tempState;
    }
  }
};
export default CartReducer;
