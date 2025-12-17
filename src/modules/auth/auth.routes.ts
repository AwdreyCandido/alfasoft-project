import { Router } from "express";
import { login, register } from "./auth.controller";

const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "auth router" });
});
router.post("/register", register);
router.post("/login", login);

export default router;
