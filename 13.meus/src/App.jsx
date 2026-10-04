import Livro from "./Livro";

function App() {
  return (
    <div>
      <h1>Meus Livros</h1>
      <Livro titulo="O Uraguai" autor="Basílio da Gama" />
      <Livro titulo="A morte de Ivan Ilitch" autor="Liev Tolstói" />
      <Livro titulo="O ateneu" autor="Raul Pompéia" />

    </div>
  );
}

export default App;