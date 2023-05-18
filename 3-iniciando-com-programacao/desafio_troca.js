let a = 7;
let b = 94;
console.log(a);
console.log(b);

/*
let aux = a;
a = b;
b = aux;
*/

[a, b] = [b, a] //Outra forma de inverter os valores das variáveis
console.log("Após a troca:");
console.log(a);
console.log(b);