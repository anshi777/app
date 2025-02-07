import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [product, setProduct] = useState([]);
  const [isLoggedOut, setIsLoggedOut] = useState(false);

  const fetchProducts = async () => {
    try {
      const res = await fetch("/data/Product.json");
      if (!res.ok) {
        throw new Error("Error fetching products");
      }
      const jsonData = await res.json();
      setProduct(jsonData);
    } catch (error) {
      console.error("There was an error while fetching data:", error);
    }
  };

  const login = (userData) => {
    setUser(userData);
    setIsLoggedOut(false);
  };

  const logout = () => {
    setIsLoggedOut(true);
    setUser(null);
  };

  return (
    <UserContext.Provider
      value={{ user, login, logout, isLoggedOut, fetchProducts, product }}
    >
      {children}
    </UserContext.Provider>
  );
};
