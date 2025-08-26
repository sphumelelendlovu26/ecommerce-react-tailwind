import { createContext, useEffect, useState } from "react";

const ParamContext = createContext();
const ParamProvider = ({ products, productId, children }) => {
  const [paramItem, setParamItem] = useState(productId);

  useEffect(() => {
    const found = products.find((p) => p.id === productId);

    if (found) {
      setParamItem(found.id);
    }
  }, [productId, products]);

  return (
    <ParamContext.Provider value={{ paramItem, setParamItem }}>
      {children}
    </ParamContext.Provider>
  );
};

export default ParamProvider;
