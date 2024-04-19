import { Outlet, Link, useLocation, NavLink } from 'react-router-dom';

function Layout() {
  const location = useLocation();

  return (
    <div className="md:flex md:min-h-screen">
      <aside className="md:w-1/4 bg-lime-700 px-5 py-10">
        <h2 className="text-lg font-black text-center text-white">
          CRUD con MongoDB
        </h2>
        <nav className="mt-10">
          <Link
            className={`${
              location.pathname === '/' ? 'text-lime-50' : 'text-white'
            } text-md block mt-2 hover:text-lime-50 text-white`}
            to="/"
          >
            Clientes
          </Link>
          <Link
            className={`${
              location.pathname === '/clientes/nuevo' ? 'text-lime-50' : 'text-white'
            } text-md block mt-2 hover:text-lime-50 text-white`}
            to="/clientes/nuevo"
          >
            Nuevo Cliente
          </Link>

          {/* <NavLink className={(isActive) => isActive ? 'text-lime-50 text-md block mt-2' : 'text-white text-md block mt-2'} to={'/clientes/nuevo'}>
            Nuevo Cliente
          </NavLink> */}
        </nav>
      </aside>
      <main className="md:w-3/4 p-10 md:h-screen overflow-scroll">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
