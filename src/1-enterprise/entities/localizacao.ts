// Avaliar uso de API do IBGE ou importar os dados para cá
export interface Localizacao {
    cep: string
    numero: number
    complemento: string
    bairro: string
    cidade: Cidade
}

interface Cidade {
    id: number
    nome: string
    estado: Estado
}

interface Estado {
    id: number
    nome: string
}
