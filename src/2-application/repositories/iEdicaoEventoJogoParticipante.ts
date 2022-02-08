import { Token } from 'typedi/Token'
import { EdicaoEventoJogoParticipante } from '#enterprise/entities/edicaoEventoJogoParticipante'

export const IEdicaoEventoJogoParticipanteRepositoryToken = new Token<IEdicaoEventoJogoParticipanteRepository>()

export interface IEdicaoEventoJogoParticipanteRepository {
  getEdicaoEventoEmpresaParticipanteById (edicaoEventoJogoParticipante: string): Promise<EdicaoEventoJogoParticipante | undefined>
  getEdicaoEventoEmpresasParticipantes (): Promise<EdicaoEventoJogoParticipante[]>
  create (edicaoEventoJogoParticipante: EdicaoEventoJogoParticipante): Promise<EdicaoEventoJogoParticipante>
  update (edicaoEventoJogoParticipante: EdicaoEventoJogoParticipante): Promise<EdicaoEventoJogoParticipante | undefined>
}
