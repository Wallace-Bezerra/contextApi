import { createContext, useState } from "react";
// Criar Contexto
export const CounterContext = createContext();

// Criar Provider
export const CounterContextProvider = ({ children }) => {
  const [counter, setCounter] = useState(20);
  return (
    <CounterContext.Provider value={{ counter, setCounter }}>
      {children}
    </CounterContext.Provider>
  );
};
