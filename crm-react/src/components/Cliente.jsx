import { useNavigate, Form, redirect } from 'react-router-dom';
import { eliminarCliente } from '../data/clientes';

export async function action({ params }) {
  await eliminarCliente(params.clienteId);
  return redirect('/');
}

function Cliente({ cliente }) {
  const navigate = useNavigate();
  const { name, empresa, email, password, address, _id } = cliente;
  return (
    <tr className="border-b">
      <td className="p-6 space-y-2 text-center">
        <p className="text-gray-800">{name}</p>
      </td>
      <td className="p-6">
        <p className="text-gray-800 text-center">{address}</p>
      </td>
      <td className="p-6">
        <p className="text-gray-800 text-center">{email}</p>
      </td>
      <td className="p-6">
        <p className="text-gray-800 text-center">{password}</p>
      </td>
      <td className="p-6 w-full h-full flex justify-center items-center gap-3">
        <button
          type="button"
          className="text-yellow-500 hover:text-yellow-700 uppercase font-bold text-xs"
          onClick={() => {
            navigate(`/clientes/${_id}/editar`);
          }}
        >
          Editar
        </button>
        <Form
          method="POST"
          action={`clientes/${_id}/eliminar`}
          onSubmit={e => {
            if (!confirm('Deseas eliminar este registro?')) {
              e.preventDefault();
            }
          }}
        >
          <button
            type="submit"
            className="text-red-600 hover:text-red-700 uppercase font-bold text-xs"
          >
            Eliminar
          </button>
        </Form>
      </td>
    </tr>
  );
}

export default Cliente;
