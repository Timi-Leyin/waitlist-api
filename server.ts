import app from './src/app';
import mongoose from "mongoose"

const PORT = process.env.PORT || process.env.DEV_PORT || 5500 

/*
 * LISTEN 👂
 */
 
app.listen(PORT, () => {
  mongoose.connection.on("connected", ()=> console.log("MongoDB connected "))
  mongoose.connection.on("disconnected", ()=> console.log("MongoDB disconnected "))
  mongoose.connection.on("reconnecting", ()=> console.log("MongoDB reconnecting..."))
  console.log(`Server running on ${process.env.NODE_ENV} mode at ${PORT} `);
});
