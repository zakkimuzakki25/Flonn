import { createContext, useState } from "react";
import LoadingPic from "../components/helper/LoadingPic";

export const LoadingContext = createContext();

// eslint-disable-next-line react/prop-types
export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {isLoading && <LoadingPic />}
      {children}
    </LoadingContext.Provider>
  );
};