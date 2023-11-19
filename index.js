// Express cria Rotas. Sua função é similar ao HTTP, porém é mais abrangente.
import "dotenv/config"
import express, { json, urlencoded } from "express"
import { PORT } from "./config/index.js"
import { indexRouter } from "./app/Routes/index.js"

const app = express()

app.use(json({ limit: "50mb" }))
app.use(urlencoded({ extended: true }))
app.use("/", indexRouter)

app.listen(PORT, () => {
  console.log(`Server ligando em: ${PORT}`)
})
