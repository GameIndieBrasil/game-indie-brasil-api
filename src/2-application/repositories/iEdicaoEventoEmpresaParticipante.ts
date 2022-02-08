import { Token } from 'typedi/Token'
import { EdicaoEventoEmpresaParticipante } from '#enterprise/entities/edicaoEventoEmpresaParticipante'

export const IEdicaoEventoEmpresaParticipanteRepositoryToken = new Token<IEdicaoEventoEmpresaParticipanteRepository>()

export interface IEdicaoEventoEmpresaParticipanteRepository {
  getEdicaoEventoEmpresaParticipanteById (edicaoEventoEmpresaParticipanteId: string): Promise<EdicaoEventoEmpresaParticipante | undefined>
  getEdicaoEventoEmpresasParticipantes (): Promise<EdicaoEventoEmpresaParticipante[]>
  create (edicaoEventoEmpresaParticipante: EdicaoEventoEmpresaParticipante): Promise<EdicaoEventoEmpresaParticipante>
  update (edicaoEventoEmpresaParticipante: EdicaoEventoEmpresaParticipante): Promise<EdicaoEventoEmpresaParticipante | undefined>
}
