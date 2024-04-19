import { useRouteError } from 'react-router-dom';

export default function ErorPage() {
  const error = useRouteError();
  console.log(error);
  return <div className='space-y-8'>
    <h1 className='text-center text-2xl font-extrabold mt-10 text-blue-900'>CRM - Clientes</h1>
    <p className='text-center'>Hubo un error</p>
    <p className='text-center'>{error.statusText || error.message}</p>
    <p className='text-center'>{error.statusText}</p>
  </div>;
}
