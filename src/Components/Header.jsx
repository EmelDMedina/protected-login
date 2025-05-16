import { useAuth } from "../Auth/AuthContext";

function Header() {
  const { isAuth, logout } = useAuth();
  return (
    <header className="bg-blue-600 shadow-md">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex space-x-6">
          <a
            href="/"
            className="text-white font-semibold hover:text-gray-200 transition-colors"
          >
            Home
          </a>
          <a
            href="/products"
            className="text-white font-semibold hover:text-gray-200 transition-colors"
          >
            Productos
          </a>
          <a
            href="/login"
            className="text-white font-semibold hover:text-gray-200 transition-colors"
          >
            Login
          </a>
          {isAuth && (
            <button onClick={logout} className="text-white">
              Logout
            </button>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
