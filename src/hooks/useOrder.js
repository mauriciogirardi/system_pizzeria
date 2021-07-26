import { createContext, useContext, useState } from 'react';
import { v4 } from 'uuid';

const OrderContext = createContext({});

export const OrderProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [orderInProgress, setOrderInProgress] = useState(false);

  const addPizzaToOrder = pizza => {
    if (orderInProgress) {
      return setPizzas(p => p.concat({ ...pizza, id: v4() }));
    }

    setOrderInProgress(true);
    setPizzas([{ ...pizza, id: v4() }]);
  };

  const removePizzaFromOrder = id => {
    setPizzas(prevState => prevState.filter(pizza => pizza.id !== id));
  };

  const sendOrder = () => {
    setOrderInProgress(false);
  };

  return (
    <OrderContext.Provider
      value={{
        addPizzaToOrder,
        sendOrder,
        removePizzaFromOrder,
        order: { pizzas },
      }}
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
