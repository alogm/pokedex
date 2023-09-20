

function Card({ data }) {
  return (
    <section>
       <div class="image-container">
    <img src={data.sprites?.other.home.front_default} alt={data.name} />
  </div>
  <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>Propiedad</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ID</td>
            <td>{data.id}</td>
          </tr>
          <tr>
            <td>Nombre</td>
            <td>{data.name}</td>
          </tr>
          <tr>
            <td>Tipo</td>
            <td>{data.a}</td>
          </tr>
        </tbody>
      </table>
      </div>
    </section>
  );
}

export default Card;