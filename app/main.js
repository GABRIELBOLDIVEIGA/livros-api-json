let livros = [];

const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

getBuscarLivrosDaAPI();

async function getBuscarLivrosDaAPI() {
  const res = await fetch(endpointDaAPI);
  livros = await res.json();
  let livrosComDesconto = aplicaDesconto(livros);
  criaElemento(livrosComDesconto);
  console.table(livros);
}

function aplicaDesconto(livros) {
  const desconto = 0.3;
  livrosComDesconto = livros.map((livro) => {
    return { ...livro, preco: livro.preco - livro.preco * desconto };
  });

  return livrosComDesconto;
}
