export interface EmpresaAssociacao {
    id: number
    idAssociacao: number
    idAssociado: number
    ativo: boolean
    inicio?: Date
    termino?: Date
}
