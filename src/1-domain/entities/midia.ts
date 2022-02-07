import { tipoMidia } from "#domain/enums/tipoMidia";

export interface Midia {
    id: number
    endereco: string
    tipo: tipoMidia
}
