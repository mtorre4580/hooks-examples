import React, { useState } from "react";
import "./index.css";

/**
 * Ejemplo hook useState, Permite hacer algun efecto secundario a un componente funcional,
 * Hacemos un fetch al enviar el form para buscar los gifs contra la API de giphy
 */
export default function({ placeholder }) {
  //State del componente query elegida
  const [query, setQuery] = useState("");
  //State resultados del gifs
  const [gifs, setGifs] = useState([]);
  //State status del cargando...
  const [isLoading, setIsLoading] = useState(false);
  const ENDPOINT_GIPHY =
    "https://api.giphy.com/v1/gifs/search?api_key=RbKfLnw0XpcE4CqZUq5Hy6an8HqIMj7y&limit=5&offset=0&rating=G&lang=es";

  const fetchResults = async query => {
    try {
      setIsLoading(true);
      const response = await fetch(`${ENDPOINT_GIPHY}&q=${query}`);
      const { data } = await response.json();
      const gifs = data.map(gif => ({
        name: gif.title,
        url: gif.images.original.url
      }));
      setGifs(gifs);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
    }
  };

  const handleOnSubmit = event => {
    event.preventDefault();
    fetchResults(query);
  };

  return (
    <div className="container-searchbox">
      <form onSubmit={handleOnSubmit} noValidate>
        <input
          className="search-input"
          type="text"
          placeholder={placeholder}
          onChange={event => setQuery(event.target.value)}
          value={query}
        />
        <button className="button-input" type="submit">
          Buscar
        </button>
      </form>
      {isLoading && <p>Buscando gifs....</p>}
      {gifs.length > 0 &&
        gifs.map((gif, index) => (
          <img className="img-gif" key={index} src={gif.url} alt={gif.name} />
        ))}
    </div>
  );
}
