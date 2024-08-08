import express from 'express';

const app = express();

app.get('/get-all-movies', (req, res) => {
    // To get all movies
});

app.patch('/', (req, res) => {
    // To edit movies
});

app.post('/', (req, res) => {
    // Create new movie
});

app.delete('/', (req, res) => {
    // Delete movie
});

export default app;