import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes";
import sweetRoutes from "./routes/sweetRoutes";


const app = express();

// ✅ Correct CORS setup
const allowedOrigins = [
  "http://localhost:5173",
  "https://ideal-space-disco-jj4qpp7w69phpr5-5173.app.github.dev", // FRONTEND
];

app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/sweets", sweetRoutes);

export default app;
