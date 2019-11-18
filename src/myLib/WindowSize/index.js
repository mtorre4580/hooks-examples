import { useState, useEffect } from "react";

/**
 * Hook custom para detectar la orientación del device, soporta SSR
 */
export default function() {
  //Me fijo si existe window, entonces estoy en el cliente...
  const isClient = typeof window === "object";

  //Levanta el valor default alto y ancho, sino devuelve undefined
  function getCurrentSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined
    };
  }

  //Creo un state para setear el valor del window actual...
  const [windowSize, setWindowSize] = useState(getCurrentSize);

  //Utilizo el effect
  useEffect(() => {
    if (!isClient) {
      return false;
    }

    function handleResize() {
      setWindowSize(getCurrentSize());
    }

    //Atacheo el evento resize del browser, para saber si se esta modificando...
    window.addEventListener("resize", handleResize);

    //Devuelvo una función para el saneamiento, es decir elimino el evento hago un detach
    return () => window.removeEventListener("resize", handleResize);

  }, []);

  return windowSize;
}
