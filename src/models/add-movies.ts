import { 
    Request, 
    Response 
} from "express";
import { 
    validateBodyAddMovies, 
    createID 
} from "../utils";
import data from "../data";

const addMovies = (request: Request, response: Response) => {
    const { 
        name, 
        description, 
        note 
    } = request.body;

    const isPassed = validateBodyAddMovies(request.body);
    
    if(!isPassed) {
        response.status(400).send("Tipos de campos invalidos");

        return
    }

    data.movies.push({
        id: createID(),
        name,
        description,
        note
    });

    response.status(200).send("Salvo com sucesso");
}

export default addMovies;