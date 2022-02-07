import { EmpresaAssociacao } from "./junctions/empresaAssociacao";
import { Localizacao } from "./localizacao";
import { Midia } from "./midia";
import { Premio } from "./premio";
import { Site } from "./site";

export interface Empresa {
    id: number
    nome: string
    slug: string
    descricao: string
    email?: string
    midias?: Midia[]
    links?: Site[]
    localizacao?: Localizacao
    ativo: boolean
    associacoes?: EmpresaAssociacao[]
    abertura?: Date
    encerra?: Date
    premios?: Premio[]
    dataAtualizacao: Date
}

enum tipoEmpresa {
    estudioFormalizado,
    estudioNaoFormalizado,
    individual,
    associacao,
    empresaEventos,
    outros,
    desconhecido = 9
}
