import { TipoEvento } from "#domain/enums/tipoEvento";

export interface EdicaoEvento {
    id: number
    idEvento: number
    nomeEdicao: string
    inicio?: Date
    termino?: Date
    tipo: TipoEvento
}
