import { globalStyles } from '@/styles/globalStyles';
import { Text, TextInput, View } from 'react-native';

interface IDescriptionInputProps {
  form: any;
  setForm: (form: any) => void;
  valueInputRef: any;
}

export default function DescriptionInput({
  form,
  setForm,
  valueInputRef,
}: IDescriptionInputProps) {
  return (
    <View>
      <Text style={globalStyles.inputLabel}>Descrição</Text>
      <TextInput
        value={form.description}
        returnKeyType="next"
        onChangeText={(text) => setForm({ ...form, description: text })}
        onSubmitEditing={() => valueInputRef.current.focus()}
        style={globalStyles.input}
      />
    </View>
  );
}
