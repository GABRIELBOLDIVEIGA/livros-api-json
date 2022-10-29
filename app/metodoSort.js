let btnOrdenarPorPreco = document.getElementById("btnOrdenarPorPreco");

btnOrdenarPorPreco.addEventListener("click", () => {
  var livrosfiltradoPorPreco = livros.sort((a, b) => a.preco - b.preco);

  criaElemento(livrosfiltradoPorPreco);

  console.table(livrosfiltradoPorPreco);
});
