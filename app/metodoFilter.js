const secValorLivros = document.getElementById("valor_total_livros_disponiveis");

const botoes = document.querySelectorAll(".btn");
botoes.forEach((btn) => btn.addEventListener("click", filtrarLivros));

function filtrarLivros() {
  const btn = document.getElementById(this.id);
  const categoria = btn.value;
  var livrosFiltrados = categoria == "disponivel" ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria);

  criaElemento(livrosFiltrados);

  if (categoria == "disponivel") {
    const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados);

    console.log(valorTotal);

    exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal);
  }
}

function filtrarPorCategoria(categoria) {
  return livros.filter((livro) => livro.categoria == categoria);
}

function filtrarPorDisponibilidade() {
  return livros.filter((livro) => livro.quantidade > 0);
}

function exibirValorTotalDosLivrosDisponiveisNaTela(total) {
  secValorLivros.innerHTML = `
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ 
        <span id="valor">${total}</span>
      </p>
    </div>
  `;
}
