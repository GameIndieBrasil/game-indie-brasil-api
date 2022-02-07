import { tipoEvento } from "#domain/enums/tipoEvento";
import { Localizacao } from "./localizacao";
import { Midia } from "./midia";
import { Site } from "./site";

export interface Evento {
    id: number
    nome: string
    slug: string
    descricao: string
    email?: string
    links?: Site[]
    localizacao?: Localizacao
    ativo?: boolean
    abertura?: Date
    encerra?: Date
    tipo: tipoEvento
    midias?: Midia[]
    edicao: string
    dataAtualizacao: Date
}
