import { createContext, useContext, useState } from 'react';

const OrderContext = createContext({});

export const OrderProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);

  const addPizzaToOrder = pizza => {
    setPizzas(p => p.concat(pizza));
  };

  return (
    <OrderContext.Provider value={{ addPizzaToOrder, order: { pizzas } }}>
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
