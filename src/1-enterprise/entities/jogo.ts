import { statusJogo } from "#enterprise/enums/statusJogo";
import { Midia } from "./midia";
import { Premio } from "./premio";

export interface Jogo {
    id: number
    nome: string
    slug: string
    descricao: string
    status: statusJogo
    midias?: Midia[]
    idademin?: number
    lancamento?: lancamentoPlat[]
    premios?: Premio[]
    generos?: genero[]
    dataAtualizacao: Date
}

interface lancamentoPlat {
    id: number
    nome: string
    dataLancamento: Date
}

interface genero {
    id: number
    nome: string
}
