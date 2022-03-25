import { EventType } from "#enterprise/enums/eventType";

export interface EventEdition {
    id: number
    createdAt: Date
    updatedAt: Date
    eventId: number
    editionName: string
    startDate?: Date
    endDate?: Date
    eventType: EventType
    companies: number[]
    games: number[]
}
