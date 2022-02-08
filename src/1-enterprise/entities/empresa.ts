import { TipoEmpresa } from "#enterprise/enums/tipoEmpresa";
import { EmpresaAssociacao } from "./empresaAssociacao";
import { Localizacao } from "./localizacao";
import { Midia } from "./midia";
import { Premio } from "./premio";

export interface Empresa {
    id: number
    nome: string
    slug: string
    descricao: string
    email?: string
    midias?: Midia[]
    localizacao?: Localizacao
    ativo: boolean
    associacoes?: EmpresaAssociacao[]
    abertura?: Date
    encerra?: Date
    premios?: Premio[]
    dataAtualizacao: Date
    tipoEmpresa: TipoEmpresa
}
