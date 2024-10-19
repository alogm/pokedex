function Nav({fnSubmit, fnClick, fnOnChange, dataOptions}) {
    return (
        <nav>
            <form onSubmit={fnSubmit}>
                <label className="input-izquierdo">Nombre o Numero: </label>
                <input type="text" className="input-izquierdo" />
                <button type="submit">Buscar</button>
            </form>
            <div>
                <label className="search-container">Buscar por letra</label>
                <div id="options">
                    <input onChange={fnOnChange} className="input-derecha" />
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
    )
}
export default Nav;