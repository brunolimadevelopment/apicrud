require('dotenv').config();
import express from "express"
import userRoutes from "./routes/users.js";
import cors from "cors"

const app = express() 

app.use(express.json()) // utilizar o modo json para post e put
app.use(cors())         // evita alguns conflitos rodando localmente

app.use("/", userRoutes); // define a rota userRoutes
app.listen(8800)        // habilita a porta