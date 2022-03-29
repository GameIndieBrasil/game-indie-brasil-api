export interface IError {
    status: number
    data: string
}

export const internalServerError: IError = {
    status: 500,
    data: 'Internal server error'
}

export const badRequest: IError = {
    status: 400,
    data: 'Bad Request'
}