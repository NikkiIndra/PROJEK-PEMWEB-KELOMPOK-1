import { createContext, useContext, useState } from "react";

const HistoryContext = createContext();

export const useHistory = () => useContext(HistoryContext);

export const HistoryProvider = ({ children }) => {
  const [history, setHistory] = useState([]);

  const addToHistory = (items) => {
    const date = new Date();
    const order = {
      id: Date.now(),
      date: date.toLocaleString(),
      items,
    };
    setHistory((prev) => [...prev, order]);
  };

  return (
    <HistoryContext.Provider value={{ history, addToHistory }}>
      {children}
    </HistoryContext.Provider>
  );
};
