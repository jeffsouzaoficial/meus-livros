
import Livro from "./Livro";

import { useState, useEffect } from "react";

function App() {
  const livrosSalvos = JSON.parse(localStorage.getItem("livros"));

  const [livros, setLivros] = useState(livrosSalvos ||[
  { titulo: "O Uraguai", autor: "Basílio da Gama", ano: 1769, lido: false},
  { titulo: "A morte de Ivan Ilitch", autor: "Liev Tolstói", ano: 1886, lido: false },
  { titulo: "O ateneu", autor: "Raul Pompéia", ano: 1888, lido: false },
  { titulo: "Os Lusíadas", autor: "Luiz de Camões", ano: 1572, lido: false }
]);

  const [novoTitulo, setNovoTitulo] = useState("");

  useEffect(() => {
  localStorage.setItem("livros", JSON.stringify(livros));
  }, [livros]);



  function adicionarLivro() {
    if (novoTitulo === "") {
      return;
    }
    const novoLivro = { titulo: novoTitulo, lido: false};
    setLivros([...livros, novoLivro]);
    setNovoTitulo("");

  }

  function marcarLido(titulo, valor) {
    const novaLista = livros.map((livro) => {
      if (livro.titulo === titulo) {
        return { ...livro, lido: valor };
      }
      return livro;
    });

    setLivros(novaLista);
  }


  return (
    <div>
      <h1>Meus Livros</h1>

      <input
        value={novoTitulo}
        onChange={(evento) => setNovoTitulo(evento.target.value)}
      />

      <button onClick={adicionarLivro}>Adicionar</button>

      {livros.map((livro) => (
        <Livro
          key={livro.titulo}
          titulo={livro.titulo}
          autor={livro.autor}
          ano={livro.ano}
          lido={livro.lido}
          marcarLido={marcarLido}
        />
      ))}
    </div>
  );
}

export default App;
