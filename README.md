# 🏪 Store Rating Platform – FullStack Intern Coding Challenge

A full-stack role-based web application that allows users to register, log in, and submit ratings for stores registered on the platform. Built using **React.js**, **Express.js**, and **PostgreSQL**, it provides a clean and scalable architecture suitable for real-world use cases.

---

## 🚀 Tech Stack

- **Frontend**: React.js, JavaScript, HTML, CSS.
- **Backend**: Express.js (can be replaced with Loopback or NestJS)
- **Database**: PostgreSQL / MySQL
- **Authentication**: JWT (JSON Web Tokens)

---

## 👥 User Roles

1. **System Administrator**
2. **Normal User**
3. **Store Owner**

---

## 🎯 Features

### 🔐 Authentication
- Single login system for all roles
- JWT token-based authentication
- Role-based access control

### 🧑‍💼 Admin Functionalities
- Create/manage stores and users
- Dashboard displaying:
  - Total Users
  - Total Stores
  - Total Ratings

### 🙋 Normal User Functionalities
- Register/login to platform
- View/search all registered stores
- Submit and edit store ratings (1-5)
- View their submitted rating

### 🧑‍🔧 Store Owner Functionalities
- Login to dashboard
- View ratings submitted by users for their store
- View average store rating

---

## 📋 Validations

- **Name**: 20–60 characters
- **Address**: Up to 400 characters
- **Password**: 8–16 characters, with 1 uppercase and 1 special character
- **Email**: Standard format

---

## 🗃️ Database Schema

### Tables
- `users`: Stores all users with role identification
- `stores`: Registered stores with owner ID
- `ratings`: Ratings submitted by users

Each table supports **sorting and filtering** via backend APIs.

---

## 🛠️ Setup Instructions

### 📌 Prerequisites
- Node.js ≥ 14
- PostgreSQL or MySQL
- npm / yarn

### 📁 Backend Setup

```bash
cd backend
npm install

Create a .env file with:

PORT=5000
DB_HOST=localhost
DB_PORT=5432
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_NAME=your_db_name
JWT_SECRET=your_jwt_secret

Run the server:

npm run dev
💻 Frontend Setup

cd frontend
npm install
npm start

The frontend will run on http://localhost:3000.

🙌 Acknowledgments
This project was developed as part of a FullStack Intern Coding Challenge, demonstrating complete CRUD and auth-based architecture with React, Node.js, and PostgreSQL.
