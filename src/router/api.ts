import express from "express";
import { getMovies } from "../models";

const router = express.Router();

router.get("/getMovies", getMovies);

export default router;