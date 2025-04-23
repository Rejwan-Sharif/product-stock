# 📦 Product Stock API

A simple RESTful API built with **Node.js**, **Express**, **MySQL**, and **Sequelize ORM** that supports full **CRUD** (Create, Read, Update, Delete) operations for managing product stock or users.

---

## 🚀 Project Overview

This API provides endpoints to:
- Add new records (Create)
- Fetch all or individual records (Read)
- Update existing records (Update)
- Delete records (Delete)

It uses a layered architecture (Controller → Service → Repository → Model) for clean code separation and scalability.

---

## 🧱 Directory Structure


---

## 🛠️ Technology Stack

- **Node.js**: Runtime environment
- **Express.js**: Web framework
- **MySQL**: Relational database
- **Sequelize**: ORM for database interaction
- **ES Modules**: Modern JS syntax (`import/export`)

---

## ⚙️ Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/Rejwan-Sharif/product-stock.git
cd product-stock


-- Install dependencies

npm install

Configure the Database

Update config/db.js with your MySQL credentials:

export const DB = 'your_db_name';
export const USER = 'your_mysql_user';
export const PASSWORD = 'your_mysql_password';
export const HOST = 'localhost';
export const dialect = 'mysql';




Run the Sequelize sync (optional)
If you're syncing your models to auto-create tables:

db.sequelize.sync();

Start the server
npm start

Server will run on: http://localhost:3000
