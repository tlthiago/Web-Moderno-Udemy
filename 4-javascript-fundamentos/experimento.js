let a = 3;

global.b = 123;

this.c = 456;
this.d = false;
this.e = "Teste";

console.log(a);
console.log(global.b);
console.log(this.c);
console.log(module.exports.c);
console.log(module.exports === this);
console.log(module.exports);

abc = 3; //Não faça isso em casa. Criando uma variável sem var e let
console.log(global.abc);