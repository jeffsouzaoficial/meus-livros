
import Livro from "./Livro";

import { useState, useEffect } from "react";

function App() {
  const livrosSalvos = JSON.parse(localStorage.getItem("livros"));

  const [livros, setLivros] = useState(livrosSalvos ||[
  { titulo: "O Uraguai", autor: "Basílio da Gama", ano: 1769 },
  { titulo: "A morte de Ivan Ilitch", autor: "Liev Tolstói", ano: 1886 },
  { titulo: "O ateneu", autor: "Raul Pompéia", ano: 1888 },
  { titulo: "Os Lusíadas", autor: "Luiz de Camões", ano: 1572 }
]);

  const [novoTitulo, setNovoTitulo] = useState("");

  useEffect(() => {
  localStorage.setItem("livros", JSON.stringify(livros));
  }, [livros]);



  function adicionarLivro() {
    if (novoTitulo === "") {
      return;
    }
    const novoLivro = { titulo: novoTitulo};
    setLivros([...livros, novoLivro]);
    setNovoTitulo("");

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
        />
      ))}
    </div>
  );
}

export default App;
