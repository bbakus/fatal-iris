

// InventoryContext.js
import { createContext, useState, useEffect } from 'react';

export const InventoryContext = createContext();

export function InventoryProvider({ children }) {
  const [inventory, setInventory] = useState(() => {
    const saved = localStorage.getItem('gameInventory');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('gameInventory', JSON.stringify(inventory));
  }, [inventory]);

  return (
    <InventoryContext.Provider value={{ inventory, setInventory }}>
      {children}
    </InventoryContext.Provider>
  );
}