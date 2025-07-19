import { globalStyles } from '@/styles/globalStyles';
import RNDateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import { useState } from 'react';
import {
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

interface IDatePickerProps {
  form: { date: Date };
  setForm: (form: any) => void;
}

export default function DatePicker({ form, setForm }: IDatePickerProps) {
  const [showPicker, setShowPicker] = useState(false);

  const handleDateChange = (_: DateTimePickerEvent, selectDate?: Date) => {
    setShowPicker(false);

    if (selectDate) {
      setForm({ ...form, date: selectDate });
    }
  };

  return (
    <View>
      <Text style={globalStyles.inputLabel}>Data</Text>

      <TouchableOpacity onPress={() => setShowPicker(true)}>
        <TextInput
          value={form.date.toLocaleDateString('pt-BR')}
          onChangeText={(text) => setForm({ ...form, date: text })}
          style={globalStyles.input}
          editable={false}
        />
      </TouchableOpacity>

      {showPicker && (
        <RNDateTimePicker
          mode="date"
          display={Platform.OS === 'ios' ? 'inline' : 'default'}
          value={form.date}
          onChange={handleDateChange}
        />
      )}
    </View>
  );
}
