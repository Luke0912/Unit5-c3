import { createContext, useState } from "react";

export const StatContext = createContext();

export const StatContextProvider = ({ children }) => {
  const [stat, setStat] = useState({
    total: 10,
    terminated: 0,
    promoted: 0,
    total_new: 0,
  });

  const handleStat = (s) => {
    setStat({
      ...stat,
      [s]: stat[s] + 1,
    });
  };
  return (
    <StatContext.Provider value={{ stat, handleStat }}>
      {children}
    </StatContext.Provider>
  );
};
