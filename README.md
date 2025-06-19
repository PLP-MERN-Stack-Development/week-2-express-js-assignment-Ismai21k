 

readme_content = """
# 📦 Simple In-Memory Product API

A RESTful API built with Express.js for managing products using in-memory storage. It includes custom middleware, validation, Swagger documentation, search, pagination, error handling, and statistics.

---

## 🚀 Features

- ✅ Create, Read, Update, Delete (CRUD) products
- 🔐 API key-based authentication
- 🛡️ Custom middleware for:
  - Logging
  - Request validation
  - Authentication
  - Error handling
- 🔍 Advanced features:
  - Search by name
  - Filter by category
  - Pagination
  - Product statistics
- 📄 Swagger UI documentation

---

## 🗂️ Project Structure
├── controller/ # Route handler logic
├── errors/ # Custom error classes
├── middleware/ # Logger, auth, validation, error handling
├── routes/ # API route definitions
├── swagger.yaml # API documentation (OpenAPI)
├── server.js # Main server file
├── .env # Environment variables
├── README.md # Project documentation


---

## 🔧 Installation

1. **Clone the repository**

```bash
git clone <https://github.com/PLP-MERN-Stack-Development/week-2-express-js-assignment-Ismai21k.git>
cd week-2-express-js-assignment

Install dependencies

npm install express  body-parser dotenv swagger-ui-espress yamljs

📘 API Documentation (Swagger)
Once the server is running, visit:

http://localhost:3000/api-docs
Swagger UI shows all endpoints, parameters, schemas, and allows testing.

🔐 API Key Protection
Some routes (e.g. /api/products) are protected with an API key.

📬 API Endpoints
Method	Endpoint	Description
GET	/api/products	Get all products
GET	/api/products/:id	Get a product by ID
POST	/api/products	Create a new product
PUT	/api/products/:id	Update a product
DELETE	/api/products/:id	Delete a product
GET	/api/search	Filter products by category
GET	/api/paginate	Paginate product list
GET	/api/searchbyname	Search products by name
GET	/api/productstats	Get product statistics (by category)

📄 Sample Product Schema
json
{
  "id": "2",
  "name": "Smartphone",
  "description": "Latest model with 128GB storage",
  "price": 800,
  "category": "electronics",
  "inStock": true
}
🧪 Testing
You can test the API using:

Postman / Insomnia

Swagger UI (/api-docs)

curl or any REST client

📌 Custom Middleware Included
logger.js – Logs every request method, URL, and timestamp

validateProduct.js – Validates request body for product creation/update

apiKey.js – Authenticates requests using x-api-key header

routeError.js – Handles 404 errors

errorHandler.js – Global error handler for the entire app

🧱 Custom Errors
Defined in /errors/customErrors.js, including:

AppError

NotFoundError

ValidationError

UnauthorizedError

🔍 Advanced Features
Search – /api/searchbyname?name=phone

Filter – /api/search?category=electronics

Pagination – /api/paginate?page=2&limit=5

Statistics – /api/productstats returns product count per category

📜 License
This project is for educational purposes. Use freely with credit.
"""


