// 02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
// Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
// Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
// ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
// triângulo).

function triangleType(side1, side2, side3) {
  if (side1 == side2 && side2 == side3 && side3 == side1) {
    console.log(`O triângulo é: Equilátero.`);
  } else if (side1 == side2 || side2 == side3 || side3 == side1) {
    console.log(`O triângulo é: Isósceles.`);
  } else {
    console.log(`O triângulo é: Escaleno`);
  }
}

triangleType(1, 1, 1);
triangleType(1, 1, 2);
triangleType(1, 2, 3);