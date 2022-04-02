import { IError } from "./generic";

export const companyNotFound: IError = {
    status: 404,
    data: 'Não foi encontrado nenhuma empresa com o dado informado'
}
