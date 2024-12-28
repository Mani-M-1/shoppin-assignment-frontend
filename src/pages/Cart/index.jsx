import { useContext } from 'react';
import CartContext from '../../context/CartContext';

const Cart = () => {
  const { cart, dispatch } = useContext(CartContext);

  return (
    <div>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cart.map((item, index) => (
          <div key={index}>
            <p>{item.name}</p>
            <p>Variant: {item.variant.size}, {item.variant.color}</p>
            <p>Price: ${item.price}</p>
            <button onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: item.id })}>
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
