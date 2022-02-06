import { tipoEvento } from "#domain/models/tipoEvento";
import { localizacao, midia, site } from "./generic";

export interface evento {
    id: number
    nome: string
    slug: string
    descricao: string
    email?: string
    links?: site[]
    localizacao?: localizacao
    ativo?: boolean
    abertura?: Date
    encerra?: Date
    tipo: tipoEvento
    midias?: midia[]
    edicao: string
    dataAtualizacao: Date
}
