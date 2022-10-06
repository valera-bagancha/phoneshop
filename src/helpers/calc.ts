export const calc = (num1: number, num2: number, operator: string) => {
  switch (operator) {
    case '+': 
      return num1 + num2;
      
    case '-': 
      return num1 - num2;

    case '/': 
      return num1 / num2;

    case 'x': 
      return num1 * num2;
  }
}