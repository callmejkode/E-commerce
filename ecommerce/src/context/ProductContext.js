import { createContext, useEffect } from "react";
import axios from "axios";

const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";
const AppProvider = ({ children }) => {
  const getProducts = async (url) => {
    const responce = await axios.get(url);
    const product = await responce.data;
    console.log(product);
  };

  useEffect(() => {
    getProducts(API);
  }, []);

  return <AppContext.Provider value="Jkode">{children}</AppContext.Provider>;
};

export { AppProvider, AppContext };
