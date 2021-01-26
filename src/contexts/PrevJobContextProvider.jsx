import React, { createContext, useState } from "react";

export const PrevJobContext = createContext({});

const PrevJobContextProvider = ({ children }) => {
  const [prevJobSearches, setPrevJobSearches] = useState([]);
  return (
    <PrevJobContext.Provider
      value={{
        prevJobSearches,
        setPrevJobSearches,
      }}
    >
      {children}
    </PrevJobContext.Provider>
  );
};

export default PrevJobContextProvider;
