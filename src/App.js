import React from "react";
import "./App.css";
import {
  Toggle,
  Snackbar,
  GifSearchBox,
  BoxResizing,
  useWindowSize
} from "./myLib";


function App() {
  //Utilizo el hook custom para obtener el valor del window al hacer resize o cambiar de orientación
  const { height, width } = useWindowSize();
  return (
    <div>
      <header className="App-header">
        <div className="hook-explanation">
          <h2>Reglas</h2>
          <ul>
            <li>Utilizar los hooks sólo en componentes funcionales</li>
            <li>No utilizarlo dentro de un for</li>
            <li>Se deben llamar en el nivel superior</li>
            <li>
              No incluir ifs dentro de los effects, rompe la rule mencionada
              antes
            </li>
            <li>
              Tener en cuenta que el orden de los hooks es primordial ya que
              React, se basa en el orden de los mismos...
              <img
                className="bad_practice"
                src="/assets/bad_hook.png"
                alt="bad_practice"
              />
            </li>
            <li>
              Utilizar el plugin de ESLint para validarlo más fácil{" "}
              <a href="https://www.npmjs.com/package/eslint-plugin-react-hooks">
                Link
              </a>
            </li>
          </ul>
        </div>
        <div className="hook-explanation">
          <h2>useState</h2>
          <p className="hook-explanation__text">
            Permite tener un estado en un componente funcional
            <code>[miGet, miSet] = useState(miProperty)</code>
          </p>
          <Toggle />
          <GifSearchBox placeholder="Buscar gifs" />
        </div>
        <div className="hook-explanation">
          <h2>useEffect</h2>
          <p className="hook-explanation__text">
            Permite hacer algún efecto secundario a un componente funcional
          </p>
          <p>
            <code>useEffect(() => miFunción);</code>
          </p>
          <ul>
            <li>
              {" "}
              Si necesitas meter lógica en los lifecycle (componentDidMount,
              componentDidUpdate, componentWillUnmout)
            </li>
            <li>Si necesitas hacer un fetch a una API</li>
            <li>Si necesitas modificar el DOM manualmente...</li>
          </ul>
          <Snackbar />
        </div>
        <div className="hook-explanation">
          <h2>useRef</h2>
          <p className="hook-explanation__text">
            Permite hacer una referencia a un elemento, como haciamos con el
            React.createRef...
          </p>
          <p>
            <code>const miRef = useRef(null);</code>
          </p>
          <BoxResizing />
        </div>
        <div className="hook-explanation">
          <h2>useMemo</h2>
          <p className="hook-explanation__text">
            Permite convertir un componente funcional a un componente puro,
            <br /> lo mismo que venimos haciendo con React.PureComponent, solo
            que en este caso <br /> ya lo podemos hacer con componentes
            funcionales, se le puede pasar un parametro <br /> para restringir
            cuando va a calcular, vendria hacer similar al shouldComponent
          </p>
          <p>
            <code>const miComponenteMemoized = useMemo(MiComponente);</code>
          </p>
          <p>
            <code>
              const memoizedValue = useMemo(() => computeExpensiveValue(a, b),
              [a, b]);
            </code>
          </p>
        </div>
        <div className="hook-explanation">
          <h2>Custom Hook</h2>
          <p>
            Podemos crear nuestros hooks para no repetir lógica en componentes,
            en vez de utilizar un HOC <br /> o el patron render props,
            directamente creamos nuestro propio hook
          </p>
          <p>
            Para crearlo lo unico que hay que tener en cuenta es que tiene que
            empezar con el nombre <b>"use"</b>
          </p>
          <p>
            Los podes utilizar en toda la aplicación son desacoplados, tienen un
            estado aislado
          </p>
          <p>En mi component funcional utilizo el hook custom</p>
          <p>
            <code>const statusWindow = useWindowSize()</code>
          </p>
          <p>
            Esta corriendo el hook del windowSize, rotá tu cel o achica el
            browser <br /> si estas en desktop para ver el valor actual
          </p>
          <p className="status-hook-window">
            Alto: {height}, Ancho {width}{" "}
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
