import { useState } from "react";
import API from "../services/api";

export default function AddSweet() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleAdd = async () => {
    try {
      await API.post("/sweets", {
        name,
        category,
        price: Number(price),
        quantity: Number(quantity),
      });

      alert("Sweet added!");
      window.location.href = "/dashboard";
    } catch (err) {
      console.error(err);
      alert("Failed to add sweet");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-6 rounded w-96 text-white">
        <h2 className="text-center text-2xl mb-4 font-bold">Add Sweet</h2>

        <input
          className="w-full p-2 mb-2 rounded bg-gray-700"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="w-full p-2 mb-2 rounded bg-gray-700"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <input
          className="w-full p-2 mb-2 rounded bg-gray-700"
          placeholder="Price"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <input
          className="w-full p-2 mb-4 rounded bg-gray-700"
          placeholder="Quantity"
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />

        <button className="w-full bg-blue-600 py-2 rounded" onClick={handleAdd}>
          Add Sweet
        </button>
      </div>
    </div>
  );
}
