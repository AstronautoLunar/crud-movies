import { BodyTypes } from "../types";

function validateBodyChangeMovies(body: BodyTypes): boolean {
    const { 
        id, 
        name, 
        description, 
        note 
    } = body;

    const isIdNumber = typeof id === "string";
    const isNameString = typeof name === "string";
    const isDescriptionString = typeof description === "string";
    const isNoteNumber = typeof note === "number";
    const isTodayPassed =
        isIdNumber
        &&
        isNameString
        &&
        isDescriptionString
        &&
        isNoteNumber;

    return isTodayPassed;
}

export default validateBodyChangeMovies;