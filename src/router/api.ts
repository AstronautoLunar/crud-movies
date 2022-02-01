import express from "express";
import bodyParser from "body-parser";
import { 
    getMovies,
    addMovies,
    changeMovies,
    deleteMovies
} from "../models";

const router = express.Router();

router.get("/getMovies", getMovies);

router.post("/addMovies", bodyParser.json(), addMovies);

router.put("/changeMovies", bodyParser.json(), changeMovies);

router.delete("/deleteMovies", bodyParser.json(), deleteMovies);

export default router;