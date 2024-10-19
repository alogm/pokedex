function Card({data}) {
    return (
        
        <section>
            
            <div className="image-container">
                <img src={data.sprites?.other.home.front_default} alt={data.name} />
            </div>
            <div>
                <table className="table-container">
                    <thead>
                        <tr className="table">
                            <th>Propiedad</th>
                            <th>Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="table">
                            <td>ID</td>
                            <td>{data.id}</td>
                        </tr>
                        <tr className="table">
                            <td>Nombre</td>
                            <td>{data.name.toUpperCase()}</td>
                        </tr>
                        <tr className="table">
                            <td>Tipo</td>
                            <td>{data.types[0].type.name}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    )
}
export default Card;