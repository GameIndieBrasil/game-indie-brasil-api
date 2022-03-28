import { Token } from 'typedi/Token'
import { Event, EventEdition } from '#enterprise/entities/event'

export const IEventRepositoryToken = new Token<IEventRepository>()

export interface IEventRepository {
    getEventById(eventId: string): Promise<Event>
    getEvents(): Promise<Event[]>
    getEventsByOwner(ownerId: string): Promise<Event[]>
    getEventsByState(stateId: string): Promise<Event[]>
    getEventsByCity(cityId: string): Promise<Event[]>
    getEventsByFoundDate(startDate: string, endDate: string): Promise<Event[]>
    getEventsByDefunctDate(startDate: string, endDate: string): Promise<Event[]>
    getActiveEvents(): Promise<Event[]>
    getEventEditionById(eventEditionId: string): Promise<Event>
    getEventEditionsByEventId(eventId: string): Promise<EventEdition[]>
    getEventsByDate(startDate: string, endDate: string): Promise<EventEdition[]>
    getEventsByCompany(companyId: string): Promise<EventEdition[]>
    getEventsByGame(gameId: string): Promise<EventEdition[]>
    create(event: Event): Promise<Event>
    update(event: Event): Promise<Event>
}
