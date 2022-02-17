const Pacient = () => {
  return (
    <form>
      <p htmlFor="name">
        Nombre:
        <span id="name">Sheila</span>
      </p>

      <p htmlFor="subname">
        Apellidos:
        <span id="subname">Gracía Clot</span>
      </p>

      <p htmlFor="tel">
        Teléfono:
        <span id="tel">666555444</span>
      </p>

      <p htmlFor="date">
        Fecha de alta:
        <span id="date">14/02/2022</span>
      </p>

      <p className="mess" htmlFor="mess">
        Síntomas:
        <span id="mess" type="text" rows="4" cols="30">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
          pariatur dicta, autem quis soluta quia incidunt culpa quasi earum
          quae. Labore, nisi dignissimos ad sunt necessitatibus omnis magnam
          dolor ut.
        </span>
      </p>

      <section>
        <button type="button">Editar</button>
        <button type="button">Eliminar</button>
      </section>
    </form>
  );
};

export default Pacient;
