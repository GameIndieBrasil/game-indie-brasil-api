import { Token } from 'typedi/Token'
import { EmpresaJogo } from '#enterprise/entities/empresaJogo'

export const IEmpresaAssociacaoRepositoryToken = new Token<IEmpresaAssociacaoRepository>()

export interface IEmpresaAssociacaoRepository {
  getEmpresaJogoById (empresaJogoId: string): Promise<EmpresaJogo | undefined>
  getEmpresaJogos (): Promise<EmpresaJogo[]>
  create (empresaJogo: EmpresaJogo): Promise<EmpresaJogo>
  update (empresaJogo: EmpresaJogo): Promise<EmpresaJogo | undefined>
}
