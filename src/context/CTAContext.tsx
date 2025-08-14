// CTAContext.tsx
'use client';
import { createContext, useContext, useState } from "react";

interface ButtonInfo {
  ref: React.RefObject<HTMLButtonElement | HTMLAnchorElement | null>; // allow null here
}

interface CTAContextType {
  register: (ref: React.RefObject<HTMLButtonElement | HTMLAnchorElement | null>) => void; // allow null
  buttons: ButtonInfo[];
}

const CTAContext = createContext<CTAContextType>({
  register: () => {},
  buttons: [],
});

export const useCTAContext = () => useContext(CTAContext);

export const CTAProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [buttons, setButtons] = useState<ButtonInfo[]>([]);

  const register = (ref: React.RefObject<HTMLButtonElement | HTMLAnchorElement | null>) => {
    setButtons(prev => [...prev, { ref }]);
  };

  return (
    <CTAContext.Provider value={{ register, buttons }}>
      {children}
    </CTAContext.Provider>
  );
};
