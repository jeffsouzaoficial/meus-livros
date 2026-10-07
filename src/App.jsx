import { useState } from "react";
import Livro from "./Livro";

function App() {
  const [livros, setLivros] = useState([
  { titulo: "O Uraguai", autor: "Basílio da Gama", ano: 1769 },
  { titulo: "A morte de Ivan Ilitch", autor: "Liev Tolstói", ano: 1886 },
  { titulo: "O ateneu", autor: "Raul Pompéia", ano: 1888 },
  { titulo: "Os Lusíadas", autor: "Luiz de Camões", ano: 1572 }
]);

  const [novoTitulo, setNovoTitulo] = useState("");

  function adicionarLivro() {
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
