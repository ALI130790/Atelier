import "./ItemCount.css";

import { useState } from "react";


const ItemCount = ({ stock }) => {
  const [contador, setContador] = useState(1);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  return (
    <div className="item-count">
      <div className="controles">
        <button onClick={restar}>-</button>
        <p>{contador}</p>
        <button onClick={sumar}>+</button>
      </div>
      <button className="terminar"> Agregar al carrito </button>
    </div>
  );
};

export default ItemCount;