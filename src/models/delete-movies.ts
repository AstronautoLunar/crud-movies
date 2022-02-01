import { 
    Request, 
    Response 
} from "express";
import data from "../data";

const deleteMovies = (
    request: Request, 
    response: Response
) => {
    const { id } = request.body;

    const isIdString = typeof id === "string";

    if(!isIdString) {
        response.status(400).send("")

        return
    }

    for(let dataMovie of data.movies) {
        const isMovieExists = dataMovie.id === id;
        
        if(!isMovieExists) {
            response.status(400).send("Filme não existe");

            return;
        }
    }

    let newMovies = data.movies.filter(movie => movie.id !== id);

    data.movies = newMovies;

    response.status(200).send("Deletado com sucesso");
}

export default deleteMovies;