import { IError } from "./generic";

export const prizeNotFound: IError = {
    status: 404,
    data: 'Prize was not found on DB'
}
