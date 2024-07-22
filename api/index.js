import express from 'express';
import userRoutes from './route/user.route.js'

const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Server running on port ${3000}`);
})

app.use('/user', userRoutes);