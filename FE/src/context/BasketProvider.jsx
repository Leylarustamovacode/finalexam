import { createContext, useState } from "react";

export const BasketContext = createContext();

function BasketProvider({ children }) {
  const [basket, setbasket] = useState([]);
  function addbasket(item) {
    const basketitem = basket.find((product) => product._id === item._id);
    if (basketitem) {
      basket.count++;
      setbasket([...basket]);
    } else {
      setbasket([...basket, { ...item, count: 1 }]);
    }
  }
  function decbasket(item) {
    const basketitem = basket.find((product) => product._id === item._id);
    if (basketitem.count == 1) {
      setbasket(basket.filter((product) => product._id !== item._id));
    } else {
      basket.count--;
      setbasket([...basket]);
    }
  }

  return (
    <BasketContext value={{ basket, addbasket, decbasket }}>
      {children}
    </BasketContext>
  );
}

export default BasketProvider;
