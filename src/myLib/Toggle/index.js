import React, { useState } from "react";
import "./index.css";

/**
 * Ejemplo hook useState
 * El hook "useState" permite tener un state en un componente funcional
 * sin tener que ser un componente de clase, recibe un valor default useState(value),
 * donde value puede ser un primitivo como un object, viene a ser al this.state = {} que hacemos
 * en el constructor de la clase
 * const [miGet, miSet] = useState(miProperty)
 */
export default function() {
  //Se utiliza el basico useState para setear un state al componente si esta encendido o apagado
  const [on, setOn] = useState(false);
  return (
    <div className="container-wrap">
      <label>
        <input
          checked={on}
          onChange={() => setOn(!on)}
          className="switch"
          type="checkbox"
        />
        <div>
          <div></div>
        </div>
      </label>
    </div>
  );
}
