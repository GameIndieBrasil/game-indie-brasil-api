// TODO: Avaliar uso de API do IBGE ou importar os dados para cá
export interface Address {
    id: number
    createdAt: number
    updatedAt: number
    cep: string
    number: number
    complement: string
    neighborhood: string
    city: City
}

interface City {
    id: number
    name: string
    state: State
}

interface State {
    id: number
    name: string
}
