import express from 'express';
import userRoutes from './routes/user.route.js'
import dotenv from 'dotenv';
import mongoose from 'mongoose';

const app = express();
const port = 3000;
dotenv.config();
app.use(express.json());

app.listen(port, () => {
    console.log(`Server running on port ${3000}`);
})

mongoose.connect(process.env.MONGO).then(() => {
    console.log('MongoDb Connected');
});

app.use('/api', userRoutes);