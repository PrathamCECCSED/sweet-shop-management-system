import API from "./API";

export const getSweets = () => API.get("/sweets");
export const addSweet = (data: any) => API.post("/sweets", data);
export const updateSweet = (id: string, data: any) => API.put(`/sweets/${id}`, data);
export const purchaseSweet = (id: string) => API.post(`/sweets/${id}/purchase`);
export const restockSweet = (id: string, amount: number) =>
  API.post(`/sweets/${id}/restock`, { amount });
