import { View } from "react-native";
import Header from "../ui/Layout/Header";
import CustomTextInput from "../ui/TextInput/CustomTextInput";
import { useState } from "react";
import Button from "../ui/Button";
import { calculate } from "../src/utils/calculatorUtils";
import style from "./styles";

export default function Calculator() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [Operator, setOperator] = useState("");
  const [display, setDisplay] = useState("");

  const Calculation = () => {
    const result = calculate(Number(input1), Number(input2), Operator);
    setDisplay(result.toString());
  };

  return (
    <View style={style.container}>
      <View style={style.containerHeader}>
        <Header title={"Calculadora"} />
      </View>
      <CustomTextInput
        title={"Valor 1"}
        hint={"Digite um número"}
        value={input1}
        onChangeText={setInput1}
      />
      <CustomTextInput
        title={"Valor 2"}
        hint={"Digite um número"}
        value={input2}
        onChangeText={setInput2}
      />
      <View style={style.containerButton}>
        <Button
          label="+"
          small
          onPress={() => setOperator("+")}
          isSelected={Operator === "+"}
        />
        <Button
          label="-"
          small
          onPress={() => setOperator("-")}
          isSelected={Operator === "-"}
        />
        <Button
          label="/"
          small
          onPress={() => setOperator("/")}
          isSelected={Operator === "/"}
        />
        <Button
          label="*"
          small
          onPress={() => setOperator("*")}
          isSelected={Operator === "*"}
        />
      </View>
      <CustomTextInput title={"Resultado"} value={display} editable={false} />
      <Button
        label="Calcular"
        onPress={Calculation}
        style={{ backgroundColor: "#ff9bb3" }}
      />
    </View>
  );
}
