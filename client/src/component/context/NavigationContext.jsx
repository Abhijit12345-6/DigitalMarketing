import React, { createContext, useContext, useState } from "react";

const NavigationContext = createContext();

export const useNavigation = () => useContext(NavigationContext);

export const NavigationProvider = ({ children }) => {
  const [activeItem, setActiveItem] = useState("/");

  const handleNavigation = (path, navigate) => {
    setActiveItem(path);
    navigate(path);
  };

  return (
    <NavigationContext.Provider value={{ activeItem, handleNavigation }}>
      {children}
    </NavigationContext.Provider>
  );
};
