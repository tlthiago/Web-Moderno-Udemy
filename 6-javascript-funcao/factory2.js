function criarProduto (nome, preco) {
    return {
        nome, // Pode ser feito assim também
        preco: preco,
        desconto: 0.1
    }
}

console.log(criarProduto("Biscoito", 2.39));