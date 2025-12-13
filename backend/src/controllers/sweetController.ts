import { Request, Response } from "express";
import Sweet from "../models/Sweet";

// Create new sweet
export const addSweet = async (req: Request, res: Response) => {
  try {
    const { name, category, price, quantity } = req.body;

    const sweet = await Sweet.create({ name, category, price, quantity });

    res.status(201).json(sweet);
  } catch (error) {
    res.status(500).json({ message: "Error creating sweet", error });
  }
};

// Get all sweets
export const getSweets = async (req: Request, res: Response) => {
  try {
    const sweets = await Sweet.find();
    res.json(sweets);
  } catch (error) {
    res.status(500).json({ message: "Error fetching sweets", error });
  }
};

// Search sweets
export const searchSweets = async (req: Request, res: Response) => {
  try {
    const { name, category, minPrice, maxPrice } = req.query;

    const query: any = {};

    if (name) query.name = { $regex: name, $options: "i" };
    if (category) query.category = category;
    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = Number(minPrice);
      if (maxPrice) query.price.$lte = Number(maxPrice);
    }

    const results = await Sweet.find(query);

    res.json(results);
  } catch (error) {
    res.status(500).json({ message: "Search failed", error });
  }
};

// Update sweet
export const updateSweet = async (req: Request, res: Response) => {
  try {
    const sweet = await Sweet.findByIdAndUpdate(req.params.id, req.body, { new: true });

    if (!sweet) return res.status(404).json({ message: "Sweet not found" });

    res.json(sweet);
  } catch (error) {
    res.status(500).json({ message: "Error updating sweet", error });
  }
};

// Delete sweet (Admin only)
export const deleteSweet = async (req: Request, res: Response) => {
  try {
    const sweet = await Sweet.findByIdAndDelete(req.params.id);

    if (!sweet) return res.status(404).json({ message: "Sweet not found" });

    res.json({ message: "Sweet deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting sweet", error });
  }
};

// Purchase sweet
export const purchaseSweet = async (req: Request, res: Response) => {
  try {
    const sweet = await Sweet.findById(req.params.id);

    if (!sweet) return res.status(404).json({ message: "Sweet not found" });
    if (sweet.quantity <= 0) return res.status(400).json({ message: "Out of stock" });

    sweet.quantity -= 1;
    await sweet.save();

    res.json({ message: "Sweet purchased", sweet });
  } catch (error) {
    res.status(500).json({ message: "Error purchasing sweet", error });
  }
};

// Restock (Admin only)
export const restockSweet = async (req: Request, res: Response) => {
  try {
    const { amount } = req.body;

    const sweet = await Sweet.findById(req.params.id);

    if (!sweet) return res.status(404).json({ message: "Sweet not found" });

    sweet.quantity += Number(amount);
    await sweet.save();

    res.json({ message: "Restocked", sweet });
  } catch (error) {
    res.status(500).json({ message: "Error restocking sweet", error });
  }
};
