import React, { useRef, useEffect } from "react";
import "./index.css";

/**
 * Hook useRef, en el caso que necesitemos utilizar el famoso React.createRef para realizar
 * alguna manipulacion, por ejemplo en onFocus, o directamente tocar el DOM, podemos utilizar
 * el hook useRef
 */
export default function() {
  const divRef = useRef(null);

  const startResizing = e => {
    divRef.current.style.width = e.clientX - divRef.current.offsetLeft + "px";
    divRef.current.style.height = e.clientY - divRef.current.offsetTop + "px";
  };

  const stopResizing = () => {
    window.removeEventListener("mousemove", startResizing, false);
    window.removeEventListener("mouseup", stopResizing, false);
  };

  //Al montarse el componente appendeo el evento
  useEffect(() => {
    const currentDiv = divRef.current;
    currentDiv.addEventListener(
      "mousedown",
      e => {
        window.addEventListener("mousemove", startResizing, false);
        window.addEventListener("mouseup", stopResizing, false);
      },
      false
    );

    return () => {
      currentDiv.removeEventListener("mousedown", {}, false);
    };
  });

  return (
    <div className="box" ref={divRef}>
      <div>Estirame, soy (Reed Richards)</div>
    </div>
  );
}
