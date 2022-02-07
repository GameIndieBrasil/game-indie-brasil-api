import { tipoMidia } from "#domain/enums/tipoMidia";

export interface midia {
    id: number
    endereco: string
    tipo: tipoMidia
}
