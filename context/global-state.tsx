import { Category } from '@/constants/categories';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useEffect, useState } from 'react';

export type Transaction = {
  id: number;
  description: string;
  value: number;
  date: Date;
  category: Category;
};

type TransactionContext = {
  transactions: Transaction[];
  setTransactions: (transactions: Transaction[]) => void;
};

export const MoneyContext = createContext<TransactionContext>({
  transactions: [],
  setTransactions: () => {},
});

interface IGlobalStateProps {
  children: any;
}

export default function GlobalState({ children }: IGlobalStateProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    // AsyncStorage.clear()
    const getAsyncStorage = async () => {
      try {
        const storedTransactions = await AsyncStorage.getItem('transactions');

        if (storedTransactions) {
          setTransactions(JSON.parse(storedTransactions));
        }
      } catch (error) {
        console.log(error);
      }
    };
    getAsyncStorage();
  }, []);

  return (
    <MoneyContext.Provider value={{ transactions, setTransactions }}>
      {children}
    </MoneyContext.Provider>
  );
}
