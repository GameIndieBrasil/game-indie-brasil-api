import { Token } from 'typedi/Token'
import { EmpresaAssociacao } from '#enterprise/entities/empresaAssociacao'

export const IEmpresaAssociacaoRepositoryToken = new Token<IEmpresaAssociacaoRepository>()

export interface IEmpresaAssociacaoRepository {
  getEmpresaAssociacaoById (empresaAssociacaoId: string): Promise<EmpresaAssociacao | undefined>
  getEmpresaAssociacoes (): Promise<EmpresaAssociacao[]>
  create (empresaAssociacao: EmpresaAssociacao): Promise<EmpresaAssociacao>
  update (empresaAssociacao: EmpresaAssociacao): Promise<EmpresaAssociacao | undefined>
}
