import { globalStyles } from '@/styles/globalStyles';
import { Text, TextInput, View } from 'react-native';

interface ICurrencyInputProps {
  form: { value: number };
  setForm: (form: any) => void;
  valueInputRef: any;
}

export default function CurrencyInput({
  form,
  setForm,
  valueInputRef,
}: ICurrencyInputProps) {
  const handleCurrencyChange = (text: string) => {
    const formattedValue = text.replace(/\D/g, '');
    const numberValue = formattedValue ? parseFloat(formattedValue) / 100 : 0;

    setForm({ ...form, value: numberValue });
  };

  return (
    <View>
      <Text style={globalStyles.inputLabel}>Valor</Text>

      <TextInput
        ref={valueInputRef}
        value={form.value.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}
        onChangeText={handleCurrencyChange}
        keyboardType="numeric"
        style={globalStyles.input}
      />
    </View>
  );
}
