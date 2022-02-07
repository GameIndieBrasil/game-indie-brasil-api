import { statusJogo } from "#domain/enums/statusJogo";
import { midia } from "./midia";
import { premio } from "./premio";

export interface jogo {
    id: number
    nome: string
    slug: string
    descricao: string
    status: statusJogo
    midias?: midia[]
    idademin?: number
    lancamento?: lancamentoPlat[]
    premios?: premio[]
    generos?: genero[]
    dataAtualizacao: Date
}

export interface lancamentoPlat {
    id: number
    nome: string
    dataLancamento: Date
}

export interface genero {
    id: number
    nome: string
}
