import { useEffect, useState } from "react";
import API from "../services/api";

export default function Inventory() {
  const [inventory, setInventory] = useState([]);

  const fetchInventory = async () => {
    try {
      const res = await API.get("/sweets");
      setInventory(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchInventory();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">📦 Inventory</h1>

      <div className="grid grid-cols-3 gap-4">
        {inventory.map((i: any) => (
          <div key={i._id} className="bg-gray-800 p-4 rounded">
            <h2 className="text-xl">{i.name}</h2>
            <p>Category: {i.category}</p>
            <p>Price: ₹{i.price}</p>
            <p>Quantity: {i.quantity}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
