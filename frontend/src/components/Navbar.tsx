import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const role = localStorage.getItem("role");

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <nav className="flex justify-between items-center px-8 py-4 glass mb-8">
      <h1 className="text-2xl font-extrabold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
        🍬 SweetShop
      </h1>

      <div className="flex gap-4 items-center">
        <Link to="/dashboard" className="hover:text-pink-400">Dashboard</Link>

        {role === "admin" && (
          <Link to="/inventory" className="hover:text-purple-400">
            Inventory
          </Link>
        )}

        <button onClick={logout} className="btn-danger">
          Logout
        </button>
      </div>
    </nav>
  );
}
