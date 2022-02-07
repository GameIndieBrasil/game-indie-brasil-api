import { Token } from 'typedi/Token'
import { Empresa } from '#domain/entities/empresa'

export const IEmpresaRepositoryToken = new Token<IEmpresaRepository>()

export interface IEmpresaRepository {
  getEmpresaById (associacaoId: string): Promise<Empresa | undefined>
  getEmpresas (): Promise<Empresa[]>
  getEmpresasByEstado (estadoId: string): Promise<Empresa[] | undefined>
  getEmpresasByCidade (cidadeId: string): Promise<Empresa[] | undefined>
  getEmpresasByAnoAbertura (anoAbertura: string): Promise<Empresa[] | undefined>
  getEmpresasByAnoEncerramento (anoEncerramento: string): Promise<Empresa[] | undefined>
  getEmpresasByTipoEmpresa (tipoEmpresa: string): Promise<Empresa[] | undefined>
  create (empresa: Empresa): Promise<Empresa>
  update (empresa: Empresa): Promise<Empresa | undefined>
}
