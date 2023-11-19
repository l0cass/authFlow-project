import { Router } from "express"

import { userCreate } from "./createUser.js"
import { userLogin } from "./userLogin.js"

export const indexRouter = Router()
indexRouter.get("/", (_, res) => res.status(200).json({ msg: "Ok." }))

indexRouter.use("/user/create", userCreate)
indexRouter.use("/user/login", userLogin)
