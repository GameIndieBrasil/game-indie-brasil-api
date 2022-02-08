import { TipoEvento } from "src/1-enterprise/enums/tipoEvento";

export interface EdicaoEvento {
    id: number
    idEvento: number
    nomeEdicao: string
    inicio?: Date
    termino?: Date
    tipo: TipoEvento
}
