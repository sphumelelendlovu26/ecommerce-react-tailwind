import { MdDelete } from "react-icons/md";

const CartItem = ({ item, removeFromCart, updateQuantity }) => {
  return (
    <div className="flex items-center gap-4 p-4 border-b page">
      <img
        src={item.thumbnail}
        alt={item.name}
        className="w-20 h-20 object-cover"
      />
      <div className="flex-1">
        <h3 className="font-semibold">{item.name}</h3>
        <p>${item.price}</p>
        <div className="border flex gap-2 mt-2">
          <button onClick={() => updateQuantity(item.id, -1)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => updateQuantity(item.id, 1)}>+</button>
        </div>
      </div>
      <button onClick={() => removeFromCart(item.id)} className="text-red-500">
        <MdDelete />
      </button>
    </div>
  );
};

export default CartItem;
