import express from "express";
import bodyParser from "body-parser";
import { 
    getMovies,
    addMovies
} from "../models";

const router = express.Router();

router.get("/getMovies", getMovies);

router.post("/addMovies", bodyParser.json(), addMovies);

export default router;