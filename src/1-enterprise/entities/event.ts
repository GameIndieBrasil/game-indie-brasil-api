import { EventType } from "#enterprise/enums/eventType";
import { Address } from "./address";
import { Media } from "./media";

export interface Event {
    id: string
    createdAt: Date
    updatedAt: Date
    companyOwnerId: number[]
    name: string
    slug: string
    description: string
    email?: string
    address?: Address
    active?: boolean
    foundDate?: Date
    defunctDate?: Date
    medias?: Media[]
    editions?: EventEdition[]
}

export interface EventEdition {
    id: number
    createdAt: Date
    updatedAt: Date
    editionName: string
    startDate?: Date
    endDate?: Date
    eventType: EventType
    companies: string[]
    games: string[]
}
