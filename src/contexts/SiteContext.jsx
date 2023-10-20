import { createContext, useContext, useState } from "react";

// context declared
const SiteContext = createContext();
export const useSiteData = () => {
  return useContext(SiteContext);
};

// Provider Set
export const SiteContextProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [generatedCode, setGeneratedCode] = useState("");

  // provider value declaration
  const value = {
    //dark mode values
    isDark,
    setIsDark,

    // loading values
    isLoading,
    setIsLoading,

    // generated code
    generatedCode,
    setGeneratedCode,
  };
  // retruning SiteContext Provider
  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
};
