import React, { createContext, useContext, useState } from 'react';
import { clsx } from 'clsx';

export interface ToastMessage {
  id: string;
  title: string;
  description?: string;
  variant?: 'info' | 'success' | 'warning' | 'danger';
}

interface ToastContextType {
  toast: (message: Omit<ToastMessage, 'id'>) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const toast = (message: Omit<ToastMessage, 'id'>) => {
    const id = Math.random().toString(36).substring(2, 9);
    const newToast = { ...message, id };
    setToasts(prev => [...prev, newToast]);

    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 4000);
  };

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      <div className="vektr-toast-container" aria-live="polite">
        {toasts.map(t => (
          <div key={t.id} data-variant={t.variant || 'info'} className="vektr-toast">
            <div className="vektr-toast-title">{t.title}</div>
            {t.description && <div className="vektr-toast-description">{t.description}</div>}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = (): ToastContextType => {
  const context = useContext(ToastContext);
  if (!context) throw new Error('useToast must be used within a ToastProvider');
  return context;
};
