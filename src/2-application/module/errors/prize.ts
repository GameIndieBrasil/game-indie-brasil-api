import { IError } from "./generic";

export const prizeNotFound: IError = {
    status: 404,
    data: 'Não foi encontrado nenhum prêmio com o dado informado'
}

export const noPrizeFound: IError = {
    status: 404,
    data: 'Nâo foi encontrado nenhum prêmio'
}

export const prizeNotCreated: IError = {
    status: 404,
    data: 'Nâo foi possível cadastrar o prêmio'
}

export const prizeNotUpdated: IError = {
    status: 404,
    data: 'Nâo foi possível atualizar o prêmio'
}
