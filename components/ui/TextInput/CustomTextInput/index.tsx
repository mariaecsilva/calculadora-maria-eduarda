import { TextInput, Text, View } from "react-native";
import style from "./styles";

type CustomTextInputProps = {
  title?: string;
  hint?: string;        
  defaultValue?: string;
  value: string; 
  editable?: boolean;
  onChangeText?: (text: string) => void; 
};

export default function CustomTextInput({
  title,
  hint,
  defaultValue,
  onChangeText,
  value,
  editable
}: CustomTextInputProps) {
  const handleTextChange = (text: string) => {
    const filteredText = text.replace(/[^0-9.]/g, '');
    const decimalCount = (filteredText.match(/\./g) || []).length;
    const finalText = decimalCount <= 1 ? filteredText : filteredText.slice(0, -1);
    
    if (onChangeText) {
      onChangeText(finalText);
    }
  };

  return (
    <View style={style.inputContainer}>
      {title && <Text style={style.title}>{title}</Text>} 
      <TextInput
        style={style.input}
        placeholder={hint}
        defaultValue={defaultValue}
        placeholderTextColor="#888"
        keyboardType="numeric"
        onChangeText={handleTextChange}
        value={value}
        editable={editable}
      />
    </View>
  );
}