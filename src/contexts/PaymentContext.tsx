"use client";

import React, { createContext, useContext, ReactNode } from 'react';

interface PaymentContextType {
  openPaymentModal: () => void;
  closePaymentModal: () => void;
}

const PaymentContext = createContext<PaymentContextType | undefined>(undefined);

export const usePayment = () => {
  const context = useContext(PaymentContext);
  if (!context) {
    throw new Error('usePayment must be used within PaymentProvider');
  }
  return context;
};

export const PaymentProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const openPaymentModal = () => {
    // Payment modal functionality removed
  };
  
  const closePaymentModal = () => {
    // Payment modal functionality removed
  };

  return (
    <PaymentContext.Provider value={{ openPaymentModal, closePaymentModal }}>
      {children}
    </PaymentContext.Provider>
  );
};

