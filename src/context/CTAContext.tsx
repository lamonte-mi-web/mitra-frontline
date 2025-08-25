// CTAContext.tsx
'use client';
import { createContext, useContext, useState, useCallback } from "react";

interface ButtonInfo {
  ref: React.RefObject<HTMLButtonElement | HTMLAnchorElement | null>;
}

interface CTAContextType {
  register: (ref: React.RefObject<HTMLButtonElement | HTMLAnchorElement | null>) => void;
  buttons: ButtonInfo[];
}

const CTAContext = createContext<CTAContextType>({
  register: () => { },
  buttons: [],
});

export const useCTAContext = () => useContext(CTAContext);

export const CTAProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [buttons, setButtons] = useState<ButtonInfo[]>([]);

  const register = useCallback(
    (ref: React.RefObject<HTMLButtonElement | HTMLAnchorElement | null>) => {
      setButtons(prev => {
        // avoid duplicates
        if (prev.some(btn => btn.ref === ref)) return prev;
        return [...prev, { ref }];
      });
    },
    []
  );

  return (
    <CTAContext.Provider value={{ register, buttons }}>
      {children}
    </CTAContext.Provider>
  );
};
