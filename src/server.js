import express from "express"
import clientRoutes from "./routes/clientRoutes.js"
import companyRoutes from "./routes/companyRoutes.js"
import feedbackRoutes from "./routes/feedbackRoutes.js"
import kartRoutes from "./routes/kartRoutes.js"
import productRoutes from "./routes/productRoutes.js"
import requestRoutes from "./routes/requestRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import cors from 'cors'

const app = express();
const port = 3000;

//MidWare
app.use(cors())
app.use(express.json())

//Rotas para o roteador
app.use("/client", clientRoutes)
app.use("/company", companyRoutes)
app.use("/feedback", feedbackRoutes)
app.use("/kart", kartRoutes)
app.use("/products", productRoutes)
app.use("/request", requestRoutes)
app.use("/user", userRoutes )

//Porta do server
app.listen(port, () =>{
    console.log("Porta rodando");
})