// 03) Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.

function mathPow(base, exponent) {
  let resultado = 1;

  if (exponent > 0) {
    while (exponent > 0) {
      resultado *= base;
      exponent--;
    }
  }

  return resultado;
}
console.log(mathPow(2, 4));

//Outras forma de fazer usando operadores do JS
function mathPow2(base, exponent) {
  return base ** exponent;
}
console.log(mathPow2(2, 4));

function mathPow3(base, exponent) {
  return Math.pow(base, exponent);
}
console.log(mathPow3(-5, 2));
