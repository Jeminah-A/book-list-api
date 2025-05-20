# 📚 Book List API

A simple RESTful API to manage a list of books using **Node.js**, **Express**, and **MongoDB**.
---
## 🚀 Features

- Add a new book
- View all books
- View a book by ID
- Update a book by ID
- Delete a book by ID
- Uses MongoDB for data persistence

---

## 🛠️ Technologies Used

- Node.js
- Express.js
- MongoDB + Mongoose
- Insomnia (for API testing)
- dotenv for environment variables

---

## 📦 Installation

```bash
git clone https://github.com/Jeminah-A/book-list-api.git
cd book-list-api
npm install

Setup
MONGODB_URL=your-mongodb-connection-string
PORT=3000

📬 API Endpoints
POST /books

JSON Body:
{
  "title": "Book Title",
  "author": "Author Name",
  "read": false
}

Get All Books
GET /books

Get Book by ID
GET /books/:id

Update a Book
PUT /books/:id

JSON Body:
{
  "title": "Updated Title",
  "read": true
}

Delete a Book
DELETE /books/:id

🧪 Testing with Insomnia
Use Insomnia to test API endpoints. Set content-type to application/json for POST/PUT.

🧠 Project Structure
book-list-api/
│
├── controllers/
│   └── booksController.js
│
├── models/
│   └── Book.js
│
├── routes/
│   └── books.js
│
├── .env
├── .gitignore
├── index.js
├── README.md
└── package.json
