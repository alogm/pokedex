

function Nav({ fnSubmit, fnClick, fnOnChange, dataOptions }) {
  return (
    <nav>
      <form onSubmit={fnSubmit}>
        <label className="input-izquierda"  htmlFor="name">
          Numero o Nombre: 
        </label>
        <input type="text" className="input-izquierda"/>
        <button type="submit">pokedex</button>
      </form>
      <div>
        <label class="search-container">Buscar Por Letra</label>
        <div id="options">
          <input type="text" className="input-derecha" onChange={fnOnChange} />
          <ul>
            {dataOptions?.map((pokemon, i) => (
              <li key={i}>
                <button value={pokemon.name} onClick={fnClick}>{pokemon.name}</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    
    </nav>
  );
}

export default Nav;