import { createContext, useContext, useState } from 'react';

const OrderContext = createContext({});

export const OrderProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [orderInProgress, setOrderInProgress] = useState(false);

  const addPizzaToOrder = pizza => {
    if (orderInProgress) {
      return setPizzas(p => p.concat(pizza));
    }

    setOrderInProgress(true);
    setPizzas([pizza]);
  };

  const sendOrder = () => {
    setOrderInProgress(false);
  };

  return (
    <OrderContext.Provider
      value={{ addPizzaToOrder, sendOrder, order: { pizzas } }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => {
  const context = useContext(OrderContext);

  if (!context) {
    throw new Error('useOrder must be used within an OrderProvider');
  }

  return context;
};
