import { 
    Request, 
    Response 
} from "express";
import { BodyTypes } from "../types";
import data from "../data";
import { validateBodyChangeMovies } from "../utils";

const changeMovies = (request: Request, response: Response) => {
    const isPassed = validateBodyChangeMovies(request.body);

    if(!isPassed) {
        response.status(400).send("Os tipos de propriedades são invalidos");
        return
    }

    const { 
        id,
        name, 
        description, 
        note 
    }: BodyTypes = request.body;

    const newData = data;

    const index = data.movies.findIndex(movie => movie.id === id);

    newData.movies[index] = {
        id,
        name,
        description,
        note
    };

    data.movies = newData.movies;

    response.status(200).send("Modificado por sucesso");
}

export default changeMovies;