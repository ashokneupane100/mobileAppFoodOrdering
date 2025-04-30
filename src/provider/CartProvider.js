import { createContext, useContext } from 'react';

export const CartContext = createContext({});

const CartProvider = ({ children }) => {
  return (
    <CartContext.Provider value={{ items: [1, 2, 3,4,5,6,7,8,9,10], onAddItem: () => {} }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;