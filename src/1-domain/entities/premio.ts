import { TipoRecebedor } from "#domain/enums/tipoRecebedor";

export interface Premio {
    id: number
    idEvento: number
    nome: string
    idRecebedor: string
    tipoRecebedor: TipoRecebedor
}