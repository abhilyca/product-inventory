# Product Inventory Management System (PERN Stack)

A full-stack Product Inventory Management System built using the PERN stack (PostgreSQL, Express.js, React.js, Node.js). The application enables users to manage products through a simple and efficient interface with core CRUD functionality.




---

## Features

* Add new products
* View all products
* Search products by name
* Delete products
* Responsive user interface
* RESTful API integration
* PostgreSQL database support

---

## Tech Stack

### Frontend

* React.js
* Axios
* CSS

### Backend

* Node.js
* Express.js

### Database

* PostgreSQL

---

## Project Structure

```
product-inventory/
│
├── backend/
│   ├── server.js
│   ├── app.js
│   ├── db.js
│   ├── routes/
│   │   └── productRoutes.js
│   └── controllers/
│       └── productController.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ProductForm.js
│   │   │   └── ProductList.js
│   │   ├── api/
│   │   │   └── productApi.js
│   │   ├── App.js
│   │   └── styles.css
```

---

## Setup Instructions

### 1. Clone the Repository

```
git clone <your-repository-url>
cd product-inventory
```

---

### 2. Backend Setup

```
cd backend
npm install
```

Create a `db.js` file:

```
import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "inventory",
  password: "your_password",
  port: 5432,
});

export default pool;
```

---

### 3. Database Setup

Run the following SQL in PostgreSQL:

```
CREATE DATABASE inventory;

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  price NUMERIC NOT NULL,
  category VARCHAR(100),
  quantity INTEGER NOT NULL
);
```

---

### 4. Run Backend

```
npm run dev
```

Server runs on:

```
http://localhost:5000
```

---

### 5. Frontend Setup

```
cd ../frontend
npm install
npm start
```

Frontend runs on:

```
http://localhost:3000
```

---

## API Endpoints

| Method | Endpoint                | Description      |
| ------ | ----------------------- | ---------------- |
| POST   | /api/products           | Add product      |
| GET    | /api/products           | Get all products |
| GET    | /api/products/search?q= | Search products  |
| DELETE | /api/products/:id       | Delete product   |

---

## Example Request

```
POST /api/products

{
  "name": "Pen",
  "price": 10,
  "category": "Stationery",
  "quantity": 5
}
```

---

## Common Issues

**Database connection error**

* Ensure PostgreSQL is running
* Verify credentials in `db.js`

**Data not saving**

* Confirm table exists
* Check backend logs for errors

---

## Future Improvements

* Update/Edit product functionality
* Authentication and authorization
* Pagination and filtering
* Deployment configuration

---

## Author

Abhishek Tripathi

---

## Summary

This project demonstrates full-stack development using the PERN stack, including API development, database integration, and responsive frontend design. It is suitable for portfolio use and technical interviews.
