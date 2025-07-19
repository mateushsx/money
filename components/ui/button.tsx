import { colors } from '@/constants/colors';
import { StyleSheet, Text, TouchableHighlight } from 'react-native';

interface IButtonProps {
  children: string;
  onPress: () => void;
}

export default function Button({ children, onPress }: IButtonProps) {
  return (
    <TouchableHighlight style={style.background} onPress={onPress}>
      <Text style={style.text}>{children}</Text>
    </TouchableHighlight>
  );
}

const style = StyleSheet.create({
  background: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 44,
    borderRadius: 8,
    backgroundColor: colors.primary,
  },
  text: {
    color: colors.primaryContrast,
    fontSize: 18,
    fontWeight: 600,
  },
});
