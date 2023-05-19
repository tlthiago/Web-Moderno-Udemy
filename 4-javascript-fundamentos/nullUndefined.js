let valor;
console.log(valor);

valor = null; //Ausência de
console.log(valor);

const produto = {};
console.log(produto.preco);
console.log(produto);

produto.preco = 3.5;
console.log(produto);

produto.preco = undefined; //Evitar atribuir undefined
console.log(!!produto.preco);
delete produto.preco;
console.log(produto);
produto.preco = null; //Sem preço
console.log(!!produto.preco);
console.log(produto);
