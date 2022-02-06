// Avaliar uso de API do IBGE ou importar os dados para cá
export interface localizacao {
    cep: string
    numero: number
    complemento: string
    bairro: string
    cidade: cidade
}

export interface cidade {
    id: number
    nome: string
    estado: estado
}

export interface estado {
    id: number
    nome: string
}
