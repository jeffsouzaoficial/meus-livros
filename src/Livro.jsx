

function Livro(props) {

  return (
    <div>
      <h2>{props.titulo}</h2>
      <p>{props.autor}</p>
      <p>{props.ano}</p>
      <button onClick={() => props.marcarLido(props.titulo, true)}>Marcar como lido</button>
      <button onClick={() => props.marcarLido(props.titulo, false)}>Desmarcar</button>
      {props.lido && <p>✅ Lido</p>}
    </div>
  );
}

export default Livro;