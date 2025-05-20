require('dotenv').config();//
const express = require('express');
const app = express();
const PORT =process.env.PORT || 3000;
const bookRoutes = require('./routes/books'); 
const mongoose = require("mongoose");//
const MONGODB_URL = process.env.MONGODB_URL;

app.use(express.json());

//connects to MongoDB
mongoose
  .connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));


app.use('/books', bookRoutes);


app.get('/', (request, response) => {
    response.send(`Welcome to the Book List API`);
});

app.listen(PORT, () =>{
    console.log(`Server running on http://localhost:${PORT} `);

});
