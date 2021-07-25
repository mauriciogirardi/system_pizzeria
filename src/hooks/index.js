import { AuthProvider } from './useAuth';
import { OrderProvider } from './useOrder';

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <OrderProvider>{children}</OrderProvider>
    </AuthProvider>
  );
};

export default Providers;
