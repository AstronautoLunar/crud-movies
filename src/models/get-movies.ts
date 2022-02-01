import { Request, Response } from "express";
import data from "../data";

const getMovies = (request: Request, response: Response) => {
    response.json(JSON.stringify(data));
}

export default getMovies;