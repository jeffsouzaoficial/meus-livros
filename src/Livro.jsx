function Livro(props) {
  return (
    <div>
      <h2>{props.titulo}</h2>
      <p>{props.autor}</p>
      <p>{props.ano}</p>
    </div>
  );
}

export default Livro;