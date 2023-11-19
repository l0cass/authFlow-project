import { Router } from "express"

export const userCreate = Router()

userCreate.post("/create/user", (_, res) =>
  res.status(200).json({ success: "User created successfully." })
)
