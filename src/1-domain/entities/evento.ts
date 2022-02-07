import { Localizacao } from "./localizacao";
import { Midia } from "./midia";
import { Site } from "./site";

export interface Evento {
    id: number
    idEmpresaResp: number
    nome: string
    slug: string
    descricao: string
    email?: string
    links?: Site[]
    localizacao?: Localizacao
    ativo?: boolean
    abertura?: Date
    encerra?: Date
    midias?: Midia[]
    edicao: string
    dataAtualizacao: Date
}
