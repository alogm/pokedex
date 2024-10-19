import './App.css';
import usePokemon from "./servicios/usePokemon";
import Nav from './componentes/Nav';
import Card from './componentes/Card';

function App() {
  const {data, filtered, handleClick, handleSubmit, handleOnChange} = usePokemon();
  

  return (
    <>
    <Nav
    fnSubmit={handleSubmit}
    fnOnChange={handleOnChange}
    dataOptions={filtered}
    fnClick={handleClick}
    />
    {data && <Card data ={data}/>}
    </>
  )
}

export default App
