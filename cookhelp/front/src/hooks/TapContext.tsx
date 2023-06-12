import React, { createContext, useState,useEffect } from "react";

type TapContextValue = {
  tapItem: number;
  setTapItem: React.Dispatch<React.SetStateAction<number>>;
};

export const TapContext = createContext<TapContextValue>({
  tapItem: 0,
  setTapItem: () => {},
});

export const TapProvider = ({ children }: { children: React.ReactNode }) => {
  const [tapItem, setTapItem] = useState<number>(0);

  const curValue = localStorage.getItem('curTap');

  useEffect (() => {
    if (curValue === "recipe") setTapItem(1)
    else if (curValue === "community") setTapItem(2)
    else if (curValue === "") setTapItem(0)
  }, [])

  return (
    <TapContext.Provider value={{ tapItem, setTapItem}}>
      {children}
    </TapContext.Provider>
  );
};
