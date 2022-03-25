import { Token } from 'typedi/Token'
import { EventEdition } from '#enterprise/entities/eventEdition'

export const IEventEditionRepositoryToken = new Token<IEventEditionRepository>()

export interface IEventEditionRepository {
    getEventEditionById(edicaoEventoId: string): Promise<EventEdition>
    getEventEditions(eventId: string): Promise<EventEdition[]>
    getEventsByDate(startDate: string, endDate: string): Promise<EventEdition[]>
    getEventsByCompany(companyId: string): Promise<EventEdition[]>
    getEventsByGame(gameId: string): Promise<EventEdition[]>
    create(edicaoEvento: EventEdition): Promise<EventEdition>
    update(edicaoEvento: EventEdition): Promise<EventEdition>
}
