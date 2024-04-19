import { useNavigate, Form, useActionData, redirect } from 'react-router-dom';
import Formulario from '../components/Formulario';
import Error from '../components/Error';
import { agregarCliente } from '../data/clientes';

export async function action({ request }) {
  const formData = await request.formData();
  const datos = Object.fromEntries(formData);
  const errores = [];

  const email = formData.get('email');
  let regex = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
  );
  if (!regex.test(email)) {
    errores.push('Email no es válido');
  }

  // validación
  if (Object.values(datos).includes('')) {
    errores.push('Todos los campos son obligatorios');
  }
  console.log(errores);

  // retornar datos si hay errores
  if (Object.keys(errores).length) {
    return errores;
  }

  await agregarCliente(datos);
  return redirect('/');
}

function Nuevocliente() {
  const errores = useActionData();
  const navigate = useNavigate();
  return (
    <>
      <h2 className="font-black text-lg text-lime-900">Nuevo Cliente</h2>
      <p className="mt-3">
        Llena todos los campos para registrar un nuevo cliente
      </p>

      <div className="flex justify-end">
        <button
          className="bg-lime-800 text-white px-3 py-1 font-bold uppercase"
          onClick={() => navigate(-1)}
        >
          Volver
        </button>
      </div>
      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20">
        {errores?.length &&
          errores.map((error, i) => <Error key={i}>{error}</Error>)}
        <Form method="post">
          <Formulario />
          <input
            type="submit"
            className="mt-5 p-3 w-full bg-lime-800 uppercase font-bold text-white"
            value="Registrar cliente"
          />
        </Form>
      </div>
    </>
  );
}

export default Nuevocliente;
