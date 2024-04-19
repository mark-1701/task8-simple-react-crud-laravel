const Formulario = ({ cliente }) => {
  return (
    <>
      <div className="mb-4">
        <label className="text-gray-800" htmlFor="nombre">
          Name:
        </label>
        <input
          id="name"
          type="text"
          className="mt-2 block w-full p-3 bg-gray-50"
          placeholder="Nombre del Cliente"
          name="name"
          // no usa state
          defaultValue={cliente?.name}
        />
      </div>
      <div className="mb-4">
        <label className="text-gray-800" htmlFor="email">
          Email:
        </label>
        <input
          id="name"
          type="text"
          className="mt-2 block w-full p-3 bg-gray-50"
          placeholder="Email del Cliente"
          name="email"
          // no usa state
          defaultValue={cliente?.email}
        />
      </div>
      <div className="mb-4">
        <label className="text-gray-800" htmlFor="password">
          Password:
        </label>
        <input
          id="password"
          type="text"
          className="mt-2 block w-full p-3 bg-gray-50"
          placeholder="Password del Cliente"
          name="password"
          // no usa state
          defaultValue={cliente?.password}
        />
      </div>
      <div className="mb-4">
        <label className="text-gray-800" htmlFor="password">
          Dirección:
        </label>
        <input
          id="address"
          type="text"
          className="mt-2 block w-full p-3 bg-gray-50"
          placeholder="Dirección del Cliente"
          name="address"
          // no usa state
          defaultValue={cliente?.address}
        />
      </div>
    </>
  );
};

export default Formulario;
