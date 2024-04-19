import {
  Form,
  useNavigate,
  useLoaderData,
  useActionData,
  redirect
} from 'react-router-dom';
import { obtenerCliente, actualizarCliente } from '../data/clientes';
import Formulario from '../components/Formulario';
import Error from '../components/Error';


export async function loader({ params }) {
  const cliente = await obtenerCliente(params.clienteId);
  if (Object.keys(cliente).length === 0) {
    throw new Response('', {
      status: 404,
      statusText: 'El Cliente no fue encontrado'
    });
  }
  return cliente;
}

export async function action({ request, params }) {
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

  // actualizar el cliente
  await actualizarCliente(params.clienteId, datos);
  return redirect('/');
}

function EditarCliente() {
  const navigate = useNavigate();
  const cliente = useLoaderData();
  const errores = useActionData();
  console.log(cliente);

  return (
    <>
      <h2 className="font-black text-lg text-lime-900">Editar Cliente</h2>
      <p className="mt-3">
        A continuación podrás cambiar los datos de un cliente
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
          <Formulario cliente={cliente} />
          <input
            type="submit"
            className="mt-5 p-3 w-full bg-lime-800 uppercase font-bold text-white"
            value="Guardar cambios"
          />
        </Form>
      </div>
    </>
  );
}

export default EditarCliente;
