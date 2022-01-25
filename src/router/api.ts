import express from "express";
import bodyParser from "body-parser";
import { 
    getMovies,
    addMovies,
    changeMovies
} from "../models";

const router = express.Router();

router.get("/getMovies", getMovies);

router.post("/addMovies", bodyParser.json(), addMovies);

router.put("/changeMovies", bodyParser.json(), changeMovies);

export default router;