import { createContext, useState } from "react";
import LoadingPic from "../components/helper/LoadingPic";

export const LoadingContext = createContext();

// eslint-disable-next-line react/prop-types
export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {isLoading && (
        <div className="fixed top-0 left-0 z-50">
          <LoadingPic /> 
        </div>
      )}
      {children}
    </LoadingContext.Provider>
  );
};