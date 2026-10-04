import Livro from "./Livro";

function App() {
  return (
    <div>
      <h1>Meus Livros</h1>
      <Livro titulo="O Uraguai" autor="Basílio da Gama" ano="1769" />
      <Livro titulo="A morte de Ivan Ilitch" autor="Liev Tolstói" ano="1886" />
      <Livro titulo="O ateneu" autor="Raul Pompéia" ano="1888" />

    </div>
  );
}

export default App;