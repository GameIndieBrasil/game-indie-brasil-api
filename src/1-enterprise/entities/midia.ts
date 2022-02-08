import { tipoMidia } from "#enterprise/enums/tipoMidia";

export interface Midia {
    id: number
    endereco: string
    tipo: tipoMidia
}
