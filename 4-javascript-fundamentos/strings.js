const escola = "Cod3r";

console.log(escola.charAt(4)); //retorna o caractere presente na posição 4 da string
console.log(5); //Não retorna nada pois não existe caractere nessa posição
console.log(escola.charCodeAt(3)); //Retorna o valor do caractere
console.log(escola.indexOf('3')); //Existe o valor 3 dentro de code? Rertona o indice onde o valor é encontrado
console.log(escola.substring(1)); //Retorna os valores a partir do indice 1
console.log(escola.substring(0,3)); //retorna os valores partindo do indice 0 e indo até o indice 3
console.log("Escola ".concat(escola).concat("!"));
console.log(escola.replace(3, "e")); //Troca o valor do indice pela string informada;
console.log("Ana, Maria, Pedro".split(","));