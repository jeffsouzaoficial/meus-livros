import { useState } from "react";

function Livro(props) {
  const [lido, setLido] = useState(false);
  return (
    <div>
      <h2>{props.titulo}</h2>
      <p>{props.autor}</p>
      <p>{props.ano}</p>
      <button onClick={() => setLido(true)}>Marcar como lido</button>
      <button onClick={() => setLido(false)}>Desmarcar</button>
      {lido && <p>✅ Lido</p>}
    </div>
  );
}

export default Livro;