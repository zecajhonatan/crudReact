import express from "express"
import userRoutes from "./routes/users.js"
import cors from "cors"
const PORT = 8800

const app = express()

app.use(express.json())
app.use(cors())

app.use("/", userRoutes)

app.listen(PORT, () => {
  console.log(`Conexão com o servidor na porta: ${PORT}`)
})