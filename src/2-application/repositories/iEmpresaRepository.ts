import { Token } from 'typedi/Token'
import { Empresa } from '#enterprise/entities/empresa'

export const IEmpresaRepositoryToken = new Token<IEmpresaRepository>()

export interface IEmpresaRepository {
  getEmpresaById (empresaId: string): Promise<Empresa | undefined>
  getEmpresas (): Promise<Empresa[]>
  create (empresa: Empresa): Promise<Empresa>
  update (empresa: Empresa): Promise<Empresa | undefined>
}
