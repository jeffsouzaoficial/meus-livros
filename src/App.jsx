import Livro from "./Livro";

const livros = [
  { titulo: "O Uraguai", autor: "Basílio da Gama", ano: 1769 },
  { titulo: "A morte de Ivan Ilitch", autor: "Liev Tolstói", ano: 1886 },
  { titulo: "O ateneu", autor: "Raul Pompéia", ano: 1888 },
  { titulo: "Os Lusíadas", autor: "Luiz de Camões", ano: 1572 }
];

function App() {
  return (
    <div>
      <h1>Meus Livros</h1>
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
