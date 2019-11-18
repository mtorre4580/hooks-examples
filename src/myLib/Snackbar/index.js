import React, { useEffect, useState } from "react";
import "./index.css";

/**
 * Ejemplo hook useEffect, Permite hacer algun efecto secundario a un componente funcional
 * Podemos manipular el DOM manualmente, como hariamos con un componente de clase en el didmount
 * Podemos hacer algun efecto al cambiar alguna prop o algo del state, como hariamos con el didUpdate
 * El useEffect puedo hacer un fetch, tambien permite retornar una función que va servir como saneamiento.
 * En este caso antes de desmontar el componente , remuevo el event listener del offline...
 */
export default function() {
  const [isOffline, setOffline] = useState(false);

  //Al montarse el componente se hace un attach del evento offline para manejar el snackbar
  useEffect(() => {
    window.addEventListener(
      "offline",
      () => {
        setOffline(true);
      },
      false
    );

    window.addEventListener(
      "online",
      () => {
        setOffline(false);
      },
      false
    );

    return () => {
      //Al salir del effect, hacemos un detach del evento, lo mismo que pondriamos en el evento willunmount al irse...
      window.removeEventListener("offline", () => setOffline(false), false);
    };
  });

  return (
    <div>
      {!isOffline && (
        <div className="default">
          Desconecta internet para mostrarte algo (=
        </div>
      )}
      <div
        style={{
          visibility: isOffline ? "visible" : "hidden",
          animation: "fadein 0.5s, fadeout 0.5s 2.5s"
        }}
        className="snackbar-offline"
      >
        Ups!! sin conexión!!
      </div>
    </div>
  );
}
