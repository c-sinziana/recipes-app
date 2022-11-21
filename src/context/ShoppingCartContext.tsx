import React, { createContext, ReactNode, useContext, useState } from "react";

import ShoppingCartDrawer from "../components/cart/ShoppingCartDrawer";

type ShoppingCartProviderProp = {
  children: ReactNode;
};

type ShoppingCartContext = {
  openCart: () => void;
  closeCart: () => void;
  getProductQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  cartQuantity: number;
  cartProducts: CartProduct[];
};

type CartProduct = {
  id: number;
  quantity: number;
};

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProp) {
  const [isOpen, setIsOpen] = useState(false);
  const [cartProducts, setCartProducts] = useState<CartProduct[]>([]);

  const cartQuantity = cartProducts.reduce(
    (quantity, product) => product.quantity + quantity,
    0
  );

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);
  function getProductQuantity(id: number) {
    return cartProducts.find((product) => product.id === id)?.quantity || 0;
  }

  function increaseCartQuantity(id: number) {
    setCartProducts((currProducts) => {
      if (currProducts.find((product) => product.id === id) == null) {
        return [...currProducts, { id, quantity: 1 }];
      } else {
        return currProducts.map((product) => {
          if (product.id === id) {
            return { ...product, quantity: product.quantity + 1 };
          } else {
            return product;
          }
        });
      }
    });
  }

  function decreaseCartQuantity(id: number) {
    setCartProducts((currProducts) => {
      if (currProducts.find((product) => product.id === id)?.quantity === 1) {
        return currProducts.filter((product) => product.id !== id);
      } else {
        return currProducts.map((product) => {
          if (product.id === id) {
            return { ...product, quantity: product.quantity - 1 };
          } else {
            return product;
          }
        });
      }
    });
  }

  function removeFromCart(id: number) {
    setCartProducts((currProducts) => {
      return currProducts.filter((product) => product.id !== id);
    });
  }
  
  return (
    <ShoppingCartContext.Provider
      value={{
        getProductQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        openCart,
        closeCart,
        cartProducts,
        cartQuantity,
      }}
    >
      <ShoppingCartDrawer isOpen={isOpen} />
      {children}
    </ShoppingCartContext.Provider>
  );
}
