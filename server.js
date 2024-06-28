import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoute.js';

//Configure env
dotenv.config();

//database config
connectDB();


//REST Object
const app = express()

//Middlewares
app.use(express.json())
app.use(morgan('dev'))

//routes
app.use('/api/v1/auth', authRoutes);

//REST API
app.get('/', (req,res) => {
    res.send('<h1>Welcome to Ecommerce app</h1>');
});

//PORT setup
const PORT = process.env.PORT || 8081;

//Run Listen
app.listen(PORT, () => {
    console.log(`Server is running on ${process.env.DEV_MODE} mode on port ${PORT}`.brightBlue)
});
