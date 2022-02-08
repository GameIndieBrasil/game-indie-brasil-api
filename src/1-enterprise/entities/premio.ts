import { TipoRecebedor } from "#enterprise/enums/tipoRecebedor";

export interface Premio {
    id: number
    idEvento: number
    nome: string
    idRecebedor: string
    tipoRecebedor: TipoRecebedor
}