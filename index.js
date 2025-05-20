const express = require('express');
const app = express();
const PORT =process.env.PORT || 3000;

app.use(express.json());

const bookRoutes = require('./routes/books'); 
app.use('/books', bookRoutes);


app.get('/', (request, response) => {
    response.send(`Welcome to the Book List API`);
});

app.listen(PORT, () =>{
    console.log(`Server running on http://localhost:${PORT} `);

});
