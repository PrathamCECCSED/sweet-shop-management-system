import { useEffect, useState } from "react";
import API from "../services/api";
import { Link } from "react-router-dom";

/* Toast Component */
const Toast = ({ message, type }: any) => {
  if (!message) return null;
  return (
    <div
      className={`fixed top-5 right-5 px-6 py-3 rounded-xl shadow-xl text-white animate-bounce ${
        type === "error"
          ? "bg-gradient-to-r from-red-600 to-pink-600"
          : "bg-gradient-to-r from-green-500 to-emerald-600"
      }`}
    >
      {message}
    </div>
  );
};

export default function Dashboard() {
  const [sweets, setSweets] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [toast, setToast] = useState({ message: "", type: "" });

  const role = localStorage.getItem("role");

  const showToast = (msg: string, type: string) => {
    setToast({ message: msg, type });
    setTimeout(() => setToast({ message: "", type: "" }), 2000);
  };

  const fetchSweets = async () => {
    try {
      const res = await API.get("/sweets");
      setSweets(res.data);
    } catch (err) {
      showToast("Failed to load sweets", "error");
      console.error(err);
    }
  };

  useEffect(() => {
    fetchSweets();
  }, []);

  const deleteSweet = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this sweet?")) return;

    try {
      await API.delete(`/sweets/${id}`);
      showToast("Sweet deleted!", "success");
      fetchSweets();
    } catch {
      showToast("Delete failed", "error");
    }
  };

  const purchaseSweet = async (id: string) => {
    try {
      await API.post(`/sweets/${id}/purchase`);
      showToast("Purchased successfully!", "success");
      fetchSweets();
    } catch {
      showToast("Purchase failed", "error");
    }
  };

  const restockSweet = async (id: string) => {
    const amount = Number(prompt("Enter restock amount:", "10"));
    if (!amount) return;

    try {
      await API.post(`/sweets/${id}/restock`, { amount });
      showToast("Restocked successfully!", "success");
      fetchSweets();
    } catch {
      showToast("Restock failed", "error");
    }
  };

  const filteredSweets = sweets.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white p-8">

      <Toast message={toast.message} type={toast.type} />

      {/* HEADER */}
      <div className="flex flex-wrap justify-between items-center mb-10 gap-4">
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
          🍬 Sweet Shop Dashboard
        </h1>

        <div className="flex gap-3">
          {role === "admin" && (
            <Link
              to="/add-sweet"
              className="px-5 py-2 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 hover:scale-105 transition font-semibold shadow-lg"
            >
              + Add Sweet
            </Link>
          )}

          <Link
            to="/inventory"
            className="px-5 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 hover:scale-105 transition font-semibold shadow-lg"
          >
            Inventory 📦
          </Link>
        </div>
      </div>

      {/* SEARCH */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="🔍 Search sweets by name..."
          className="w-full md:w-96 p-3 rounded-xl bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* SWEETS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSweets.map((sweet) => (
          <div
            key={sweet._id}
            className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl shadow-xl hover:scale-105 transition"
          >
            <h2 className="text-2xl font-bold text-pink-400 mb-1">
              {sweet.name}
            </h2>

            <p className="text-gray-300">{sweet.category}</p>

            <p className="mt-2 text-lg font-semibold">
              ₹ {sweet.price}
            </p>

            <span
              className={`inline-block mt-3 px-3 py-1 rounded-full text-sm font-semibold ${
                sweet.quantity > 0
                  ? "bg-green-500/20 text-green-300"
                  : "bg-red-500/20 text-red-300"
              }`}
            >
              Stock: {sweet.quantity}
            </span>

            {/* ACTION BUTTONS */}
            <div className="flex flex-wrap gap-2 mt-5">
              {role === "user" && (
                <button
                  onClick={() => purchaseSweet(sweet._id)}
                  disabled={sweet.quantity === 0}
                  className={`w-full px-4 py-2 rounded-xl font-semibold transition ${
                    sweet.quantity === 0
                      ? "bg-gray-600 cursor-not-allowed"
                      : "bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-105"
                  }`}
                >
                  Buy
                </button>
              )}

              {role === "admin" && (
                <>
                  <Link
                    to={`/edit-sweet/${sweet._id}`}
                    className="flex-1 text-center bg-yellow-400 text-black px-4 py-2 rounded-xl font-semibold hover:bg-yellow-500 transition"
                  >
                    Edit
                  </Link>

                  <button
                    onClick={() => deleteSweet(sweet._id)}
                    className="flex-1 bg-red-600 px-4 py-2 rounded-xl font-semibold hover:bg-red-700 transition"
                  >
                    Delete
                  </button>

                  <button
                    onClick={() => restockSweet(sweet._id)}
                    className="flex-1 bg-purple-600 px-4 py-2 rounded-xl font-semibold hover:bg-purple-700 transition"
                  >
                    Restock
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
