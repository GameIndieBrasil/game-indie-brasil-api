import { tipoEvento } from "#domain/enums/tipoEvento";
import { localizacao } from "./localizacao";
import { midia } from "./midia";
import { site } from "./site";

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
