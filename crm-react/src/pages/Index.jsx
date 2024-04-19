import { useLoaderData } from 'react-router-dom';
import Cliente from '../components/Cliente';
import { obtenerClientes } from '../data/clientes';

export function loader() {
  return obtenerClientes();
}

function Index() {
  const clientes = useLoaderData();

  return (
    <>
      <h2 className="font-black text-lg text-lime-900">Clientes</h2>
      <p className="mt-3">Administra tus Clientes</p>
      {clientes.length ? (
        <table className="w-full bg-white shadow mt-5 table-auto">
          <thead className="bg-lime-800 text-white">
            <tr>
              <th className="p-2">Name</th>
              <th className="p-2">Email</th>
              <th className="p-2">Password</th>
              <th className="p-2">Dirección</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map(cliente => (
              <Cliente cliente={cliente} key={cliente._id} />
            ))}
          </tbody>
        </table>
      ) : (
        <a href="" className="text-center mt-10"></a>
      )}
    </>
  );
}

export default Index;
