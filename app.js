import express from 'express';
import cors from 'cors';
import sequelize from './config/db.js'; 
import 'dotenv/config';
import userRoutes from './routes/userRoutes.js';
import exportRoutes from './routes/exportRoutes.js';


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/api/user", userRoutes)
app.use("/api/export", exportRoutes)

app.get("/health", (req, res) => {
   res.json("Server running")
})

const PORT = process.env.PORT || 3000;

const startServer = async () => {
   try {
      await sequelize.authenticate();
      await sequelize.sync();
      console.log("Database connection successful");
      app.listen(PORT, () => {
         console.log(`Server is running on port ${PORT}`);
      });
   } catch (error) {
      console.error("Unable to connect to the database:", error);
   }
}

startServer();


