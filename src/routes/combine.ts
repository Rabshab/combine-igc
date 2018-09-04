import { Router } from "express";

const router = Router();

router.post("/combine", async (req, res) => {
  //TODO implement combining logic

  res.set("Content-Type", "application/json");
  await res.send("result");
});

export default router;
