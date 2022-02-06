import { associacao } from "./associacao";
import { localizacao } from "./localizacao";
import { midia } from "./midia";
import { premio } from "./premio";
import { site } from "./site";


export interface empresa {
    id: number
    nome: string
    slug: string
    descricao: string
    email?: string
    midias?: midia[]
    links?: site[]
    localizacao?: localizacao
    ativo: boolean
    associacoes?: associacao[]
    abertura?: Date
    encerra?: Date
    premios?: premio[]
    dataAtualizacao: Date
}
