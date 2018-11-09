import { Router } from "express";
import combiner from "../combiner";

const router = Router();

router.post("/combine", async (req, res) => {
  const parsed = JSON.parse(req.body);
  const combined = combiner(parsed);

  res.set("Content-Type", "text/plain");
  await res.send(combined);
});

export default router;
