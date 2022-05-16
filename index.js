 const express = require('express');
 const mongoose = require('mongoose');
 const bodyparser = require('body-parser');
 const cors = require('cors');
 const dotenv = require('dotenv');
 
 dotenv.config();
 //Creating an app from express
 const app = express();
 
 //Getting the output as a JSON from the app
 //app.use(express.json()); -- Commented on addition of bodyparser
 app.use(bodyparser.json());
 app.use(cors());
 
 app.get('/', async(req,res) => {
     res.send('Welcome to the Delivery Service!!');
 })
 
 /**
  * ROUTE IMPORTED FROM - BACKEND -> ROUTES 
  */
 const deliveryRoutes = require('./routes/Delivery');

 app.use("/delivery", deliveryRoutes);
 
 
 const PORT = process.env.PORT || 3001;
 const MONGODB_URI = process.env.MONGODB_URI;
 
 //Connection to mongoose
 mongoose.connect(MONGODB_URI , {
     useNewUrlParser: true,
     useUnifiedTopology: true,
 }, (error) => {
     if(error) {
         console.log('Error in connection');
     }
 })
 
 //Check if connection is successful
 mongoose.connection.once('open', () => {
     console.log('Database Synched!!');
 })
 
 //Running on the server
 app.listen(PORT,() => {
     console.log(`Server is started and running on ${PORT}`);
 });
 
 module.exports = app;
 
 