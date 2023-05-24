// 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
// primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
// retornará o valor da aplicação sob o regime de juros compostos.

function simpleFees(capitalInicial, taxaDeJuros, TempoDeAplicacao) {
  let montante = capitalInicial * taxaDeJuros * TempoDeAplicacao;
  return console.log(montante);
}

simpleFees(600, 0.12, 5);

function compoundFees(capitalInicial, taxaDeJuros, TempoDeAplicacao) {
  let montante = capitalInicial * ((1 + taxaDeJuros) ** TempoDeAplicacao);
  return console.log(montante);
}

compoundFees(1400, 0.07, 2);
