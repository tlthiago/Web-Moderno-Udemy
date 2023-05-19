//Função sem retorno
function imprimirSoma(a, b) {
  console.log(a + b);
}

imprimirSoma(2, 3); //Retorna o resultado
imprimirSoma(2); //Retorna NaN

//Função com retorno
function soma(a, b = 1) {
    return a + b;
}

console.log(soma(2, 3));
console.log(soma(2));