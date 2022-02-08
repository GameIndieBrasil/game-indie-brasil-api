import { Token } from 'typedi/Token'
import { Evento } from '#enterprise/entities/evento'

export const IEventoRepositoryToken = new Token<IEventoRepository>()

export interface IEventoRepository {
  getEventoById (eventoId: string): Promise<Evento | undefined>
  getEventos (): Promise<Evento[]>
  create (evento: Evento): Promise<Evento>
  update (evento: Evento): Promise<Evento | undefined>
}
