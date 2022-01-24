import { BodyTypes } from "../types";

function validate(body: BodyTypes): boolean {
    const { 
        name, 
        description, 
        note 
    } = body;

    const isNameString = typeof name === "string";
    const isDescriptionString = typeof description === "string";
    const isNoteNumber = typeof note === "number";

    const isTodayPassed = 
        isNameString 
        && 
        isDescriptionString 
        && 
        isNoteNumber;

    return isTodayPassed;
}

export default validate;