# sweet-shop-management-system
🍬 Sweet Shop Management System

A full-stack Sweet Shop Management System built as part of a TDD Kata to demonstrate backend API design, authentication, role-based access control, inventory management, and a modern responsive frontend.

This project simulates a real-world sweet shop where users can browse and purchase sweets, while admins manage inventory securely.

🚀 Features
🔐 Authentication & Authorization

User registration and login

JWT-based authentication

Role-based access control:

Admin → Manage sweets & inventory

User → Browse & purchase sweets

🍭 Sweet Management (Admin)

Add new sweets

Edit sweet details

Delete sweets

Restock inventory

🛒 User Operations

View all available sweets

Search sweets by name

Purchase sweets (quantity auto-decreases)

Purchase button disabled when stock is 0

📦 Inventory

Dedicated inventory view

Real-time quantity updates after purchase/restock

🎨 UI / UX

Fully responsive layout

Dark modern theme

Clean card-based design

Toast notifications for success & errors

Role-based UI rendering

🧱 Tech Stack
Backend

Node.js + TypeScript

Express.js

MongoDB (Atlas)

JWT Authentication

Mongoose

Frontend

React + TypeScript

Vite

Tailwind CSS

Axios

React Router DOM

📁 Project Structure
sweet-shop-management-system/
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   └── server.ts
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── components/
│   │   └── App.tsx
│   └── package.json
│
├── screenshots/
│
└── README.md

🔌 API Endpoints
Auth
Method	Endpoint	Description
POST	/api/auth/register	Register user
POST	/api/auth/login	Login user
Sweets (Protected)
Method	Endpoint	Description
POST	/api/sweets	Add sweet (Admin)
GET	/api/sweets	List sweets
GET	/api/sweets/search	Search sweets
PUT	/api/sweets/:id	Update sweet
DELETE	/api/sweets/:id	Delete sweet (Admin)
Inventory
Method	Endpoint	Description
POST	/api/sweets/:id/purchase	Purchase sweet
POST	/api/sweets/:id/restock	Restock sweet (Admin)
