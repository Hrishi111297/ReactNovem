// Loader.js
import React from "react";
import { useLoader } from "./LoaderContext";

const Loader = () => {
  const { isLoading } = useLoader();

  if (!isLoading) return null; // Do not render if not loading

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="w-16 h-16 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
