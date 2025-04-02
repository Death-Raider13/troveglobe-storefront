
import React, { createContext, useContext, useState, useEffect } from 'react';

export type ShippingDetails = {
  fullName: string;
  phoneNumber: string;
  email: string;
  address: string;
  city: string;
  state: string;
  additionalInfo?: string;
};

export type OrderStatus = 'pending' | 'processing' | 'shipped' | 'delivered' | 'completed';

export type Order = {
  id: string;
  items: any[];
  deliveryMethod: string;
  paymentMethod: string;
  shippingDetails: ShippingDetails;
  status: OrderStatus;
  totalAmount: number;
  riderDetails?: {
    name: string;
    phoneNumber: string;
  };
  orderDate: string;
  pickupLocation?: string;
  trackingCode: string;
};

interface OrderTrackingContextType {
  orders: Order[];
  currentOrder: Order | null;
  addOrder: (order: Omit<Order, 'id' | 'orderDate' | 'status' | 'trackingCode'>) => Order;
  getOrder: (id: string) => Order | undefined;
  hasActiveOrders: boolean;
}

const OrderTrackingContext = createContext<OrderTrackingContextType | undefined>(undefined);

// Helper to generate a random tracking code
const generateTrackingCode = () => {
  return 'KG-' + Math.floor(100000 + Math.random() * 900000);
};

// Helper to generate a unique order ID
const generateOrderId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
};

export const OrderTrackingProvider = ({ children }: { children: React.ReactNode }) => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [currentOrder, setCurrentOrder] = useState<Order | null>(null);
  
  // Load orders from localStorage on mount
  useEffect(() => {
    const storedOrders = localStorage.getItem('orders');
    if (storedOrders) {
      try {
        setOrders(JSON.parse(storedOrders));
      } catch (error) {
        console.error('Failed to parse orders from localStorage:', error);
      }
    }
  }, []);
  
  // Save orders to localStorage when they change
  useEffect(() => {
    localStorage.setItem('orders', JSON.stringify(orders));
  }, [orders]);
  
  const addOrder = (orderData: Omit<Order, 'id' | 'orderDate' | 'status' | 'trackingCode'>) => {
    const newOrder: Order = {
      ...orderData,
      id: generateOrderId(),
      status: 'pending',
      orderDate: new Date().toISOString(),
      trackingCode: generateTrackingCode(),
      pickupLocation: orderData.deliveryMethod === 'pickup' 
        ? 'No 3 Taofeek Abolaji Street, Ilasamaja' 
        : undefined,
      riderDetails: orderData.deliveryMethod === 'delivery' 
        ? {
            name: "John Rider", // This would come from a real system
            phoneNumber: "08022334455", // This would come from a real system
          } 
        : undefined
    };
    
    setOrders(prev => [...prev, newOrder]);
    setCurrentOrder(newOrder);
    return newOrder;
  };
  
  const getOrder = (id: string) => {
    return orders.find(order => order.id === id);
  };
  
  const hasActiveOrders = orders.some(order => 
    order.status !== 'delivered' && order.status !== 'completed'
  );
  
  return (
    <OrderTrackingContext.Provider value={{
      orders,
      currentOrder,
      addOrder,
      getOrder,
      hasActiveOrders
    }}>
      {children}
    </OrderTrackingContext.Provider>
  );
};

export const useOrderTracking = () => {
  const context = useContext(OrderTrackingContext);
  
  if (context === undefined) {
    throw new Error('useOrderTracking must be used within an OrderTrackingProvider');
  }
  
  return context;
};
