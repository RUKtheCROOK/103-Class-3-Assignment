function calculation() {
  let num1 = Number(prompt("Please enter the first number"));
  let num2 = Number(prompt("Please enter the second number"));
  let symbol = prompt(
    "Please pick addition(+), subtraction(-), multiplication(*), or division(/))"
  );
  switch (symbol) {
    case "+":
      console.log(num1 + num2);
      document.getElementById(
        "calculator-display"
      ).innerHTML = `<h4> Your inputted simple 2 number calculation was: <b><div style="font-size: 30px;">${num1} + ${num2}</div> </b></h4>
      <break>
      <h3> The answer to your simple 2 number calculation is:  <div style="font-size: 30px; border: solid black 3px;">${
        num1 + num2
      }</div></h3>`;
      break;
    case "-":
      console.log(num1 - num2);
      document.getElementById(
        "calculator-display"
      ).innerHTML = `<h4> Your inputted simple 2 number calculation was: <b><div style="font-size: 30px;">${num1} - ${num2}</div></b></h4>
      <break>
      <h3> The answer to your simple 2 number calculation is:  <div style="font-size: 30px; border: solid black 3px;">${
        num1 - num2
      }</div></h3>`;
      break;
    case "*":
      console.log(num1 * num2);
      document.getElementById(
        "calculator-display"
      ).innerHTML = `<h4> Your inputted simple 2 number calculation was: <b><div style="font-size: 30px;">${num1} * ${num2}</div></b></h4>
      <break>
      <h3> The answer to your simple 2 number calculation is:  <div style="font-size: 30px; border: solid black 3px;">${
        num1 * num2
      }</div></h3>`;
      break;
    case "/":
      console.log(num1 / num2);
      document.getElementById(
        "calculator-display"
      ).innerHTML = `<h4> Your inputted simple 2 number calculation was: <b><div style="font-size: 30px;">${num1} / ${num2} </div></b></h4>
      <break>
      <h3> The answer to your simple 2 number calculation is:  <div style="font-size: 30px; border: solid black 3px;">${
        num1 / num2
      }</div></h3>`;
      break;
  }
}
