export const calculate = (num1: number, num2: number, operator: string): number => {
    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        return num2 !== 0 ? num1 / num2 : NaN; 
      default:
        return NaN;
    }
  };