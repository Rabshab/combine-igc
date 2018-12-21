import { Router } from "express";
import combiner from "../combiner";

const router = Router();

router.post("/combine", async (req, res) => {
  
  const combined = combiner(req.body);

  res.set("Content-Type", "text/plain");
  await res.send(combined);
});

export default router;
