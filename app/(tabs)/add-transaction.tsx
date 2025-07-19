import CategoryPicker from '@/components/category-picker';
import DescriptionInput from '@/components/description-input';
import Button from '@/components/ui/button';
import CurrencyInput from '@/components/ui/currency-input';
import DatePicker from '@/components/ui/date-picker';
import { categories } from '@/constants/categories';
import { MoneyContext, Transaction } from '@/context/global-state';
import { globalStyles } from '@/styles/globalStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useContext, useRef, useState } from 'react';
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

const initialForm = {
  description: '',
  value: 0,
  date: new Date(),
  category: categories.income.name,
};

export default function AddTransactions() {
  const [form, setForm] = useState(initialForm);
  const { transactions, setTransactions } = useContext(MoneyContext);
  const valueInputRef = useRef(null);

  const setAsyncStorage = async (data: Transaction[]) => {
    try {
      await AsyncStorage.setItem('transactions', JSON.stringify(data));
    } catch (e) {
      console.log(e);
    }
  };

  const addTransaction = async () => {
    const newTransaction = { id: transactions.length + 1, ...form };
    const updatedTransactions = [...transactions, newTransaction];

    setTransactions(updatedTransactions);
    setForm(initialForm);
    await setAsyncStorage(updatedTransactions);

    Alert.alert('Transação adicionada com sucesso!');
  };

  return (
    <KeyboardAvoidingView style={globalStyles.screenContainer}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView style={globalStyles.content}>
          <View style={styles.form}>
            <DescriptionInput
              form={form}
              setForm={setForm}
              valueInputRef={valueInputRef}
            />
            <CurrencyInput
              form={form}
              setForm={setForm}
              valueInputRef={valueInputRef}
            />
            <DatePicker form={form} setForm={setForm} />
            <CategoryPicker form={form} setForm={setForm} />
          </View>

          <Button onPress={addTransaction}>Adicionar</Button>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  form: {
    gap: 12,
    marginBottom: 40,
    marginTop: 10,
  },
});
