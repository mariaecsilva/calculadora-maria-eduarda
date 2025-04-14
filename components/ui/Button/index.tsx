import { TouchableOpacity, Text, StyleSheet, GestureResponderEvent } from "react-native";
import style from "./styles"

type ButtonProps = {
  label: string;
  small?: boolean;
  onPress: () => void;
  isSelected?: boolean; 
};

export default function Button({
  label,
  small,
  onPress,
  isSelected,
}: ButtonProps) {
  return (
    <TouchableOpacity
    style={[
        style.button,
        small && style.smallButton,
        isSelected && { backgroundColor: "#ff6b6b" }, 
      ]} onPress={onPress} 
    >
      <Text style={style.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
}
