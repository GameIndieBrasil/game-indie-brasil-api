// TODO: Avaliar uso de API do IBGE ou importar os dados para cá
export interface Address {
<<<<<<< HEAD
    id: string
    createdAt: number
    updatedAt: number
=======
    id: number
    createdAt: number
    updatedAt: number
>>>>>>> parent of 429dd0d (Set default ids to string (planning to use uuid))
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
