import "./App.css";
import Card from "./componentes/Card";
import Nav from "./componentes/nav";
import usePokemon from "./servicios/usePokemon";

function App() {
  const { data, filtered, handleClick, handleSubmit, handleOnChange } = usePokemon();

  return (
    <body>
      
    
    <main>
      <Nav
        fnSubmit={handleSubmit}
        fnClick={handleClick}
        fnOnChange={handleOnChange}
        dataOptions={filtered}
      />
      {data && <Card data={data} />}
    </main>
    </body>
  );
}

export default App;
