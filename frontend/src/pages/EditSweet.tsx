import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";

export default function EditSweet() {
  const { id } = useParams();
  const [sweet, setSweet] = useState<any>(null);
  const [message, setMessage] = useState("");

  // Load existing sweet
  const fetchSweet = async () => {
    try {
      const res = await API.get(`/sweets`);
      const found = res.data.find((s: any) => s._id === id);
      setSweet(found);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchSweet();
  }, []);

  const updateSweet = async (e: any) => {
    e.preventDefault();

    try {
      await API.put(`/sweets/${id}`, {
        name: sweet.name,
        category: sweet.category,
        price: Number(sweet.price),
        quantity: Number(sweet.quantity),
      });

      setMessage("Sweet updated successfully! 🎉");

      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 1000);

    } catch (error) {
      setMessage("Update failed ❌");
      console.error(error);
    }
  };

  if (!sweet) return <p className="text-white p-10">Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <form className="bg-gray-800 p-8 rounded-lg w-96" onSubmit={updateSweet}>
        <h1 className="text-2xl font-bold mb-4">Edit Sweet</h1>

        {message && <p className="mb-3 text-center text-green-400">{message}</p>}

        <input
          value={sweet.name}
          onChange={(e) => setSweet({ ...sweet, name: e.target.value })}
          className="w-full p-2 mb-3 bg-gray-700 rounded"
        />

        <input
          value={sweet.category}
          onChange={(e) => setSweet({ ...sweet, category: e.target.value })}
          className="w-full p-2 mb-3 bg-gray-700 rounded"
        />

        <input
          type="number"
          value={sweet.price}
          onChange={(e) => setSweet({ ...sweet, price: e.target.value })}
          className="w-full p-2 mb-3 bg-gray-700 rounded"
        />

        <input
          type="number"
          value={sweet.quantity}
          onChange={(e) => setSweet({ ...sweet, quantity: e.target.value })}
          className="w-full p-2 mb-3 bg-gray-700 rounded"
        />

        <button className="w-full bg-blue-600 py-2 rounded mt-3">Save Changes</button>
      </form>
    </div>
  );
}
