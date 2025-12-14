# 🍬 Sweet Shop Management System

A full-stack **Sweet Shop Management System** developed as part of a **TDD Kata** for placement evaluation.  
This project demonstrates backend API development, secure authentication, role-based access control, inventory management, and a modern responsive frontend.

---

## 🚀 Project Overview

The Sweet Shop Management System allows:
- **Users** to browse, search, and purchase sweets.
- **Admins** to manage sweets, inventory, and stock levels.

The system follows clean architecture, RESTful API principles, and modern UI/UX practices.

---

## ✨ Features

### 🔐 Authentication & Authorization
- User Registration & Login
- JWT-based authentication
- Role-based access control:
  - **Admin**: Full inventory management
  - **User**: Browse & purchase sweets

---

### 🍭 Sweet Management (Admin Only)
- Add new sweets
- Edit sweet details
- Delete sweets
- Restock inventory

---

### 🛒 User Operations
- View all available sweets
- Search sweets by name
- Purchase sweets
- Purchase button disabled when quantity is zero

---

### 📦 Inventory Management
- Real-time inventory updates
- Dedicated inventory view
- Quantity auto-updates after purchase or restock

---

### 🎨 UI / UX
- Modern dark theme
- Responsive layout
- Card-based sweet display
- Toast notifications for success & errors
- Role-based UI rendering

---

## 🧱 Tech Stack

### Backend
- Node.js
- TypeScript
- Express.js
- MongoDB (Atlas)
- Mongoose
- JWT Authentication

### Frontend
- React
- TypeScript
- Vite
- Tailwind CSS
- Axios
- React Router DOM

---


---

## 🔌 API Endpoints

### Auth
| Method | Endpoint | Description |
|------|---------|-------------|
| POST | `/api/auth/register` | Register user |
| POST | `/api/auth/login` | Login user |

---

### Sweets (Protected)
| Method | Endpoint | Description |
|------|---------|-------------|
| POST | `/api/sweets` | Add sweet (Admin) |
| GET | `/api/sweets` | View all sweets |
| GET | `/api/sweets/search` | Search sweets |
| PUT | `/api/sweets/:id` | Update sweet |
| DELETE | `/api/sweets/:id` | Delete sweet (Admin) |

---

### Inventory (Protected)
| Method | Endpoint | Description |
|------|---------|-------------|
| POST | `/api/sweets/:id/purchase` | Purchase sweet |
| POST | `/api/sweets/:id/restock` | Restock sweet (Admin) |

---

## ⚙️ Setup & Run Locally

### 1️⃣ Clone Repository
```bash
git clone https://github.com/PrathamCECCSED/sweet-shop-management-system.git
cd sweet-shop-management-system



