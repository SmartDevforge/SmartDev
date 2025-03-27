/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";

// Create Context
const CategoryContext = createContext();

// Create Provider Component
export const CategoryProvider = ({ children }) => {
  const [currentCategory, setCurrentCategory] = useState(null);

  return (
    <CategoryContext.Provider value={{ currentCategory, setCurrentCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Load cart from local storage or set an empty array
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });

  // Update local storage whenever cart changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Function to add items to cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);

      if (existingItem) {
        // Increase quantity if item exists
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // Add new item with quantity 1
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Function to remove an item (decrease quantity or remove if quantity is 1)
  const removeFromCart = (id) => {
    setCart((prevCart) => {
      return prevCart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0); // Remove item if quantity reaches 0
    });
  };

  // Function to clear cart
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom Hooks
export const useCart = () => {
  return useContext(CartContext);
};

export const useCategory = () => {
  return useContext(CategoryContext);
};

// Create Context
const SidebarContext = createContext();

// Provider Component
export const SidebarProvider = ({ children }) => {
  const [selectedRoute, setSelectedRoute] = useState("/index"); // Default route

  return (
    <SidebarContext.Provider value={{ selectedRoute, setSelectedRoute }}>
      {children}
    </SidebarContext.Provider>
  );
};

// Custom Hook to use SidebarContext
export const useSidebar = () => {
  return useContext(SidebarContext);
};



