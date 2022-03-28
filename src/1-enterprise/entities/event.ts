import { EventType } from "#enterprise/enums/eventType";
import { Address } from "./address";
import { Media } from "./media";

export interface Event {
    id: string
    createdAt: number
    updatedAt: number
    companyOwnerId: number[]
    name: string
    slug: string
    description: string
    email?: string
    address?: Address
    active?: boolean
    foundDate?: number
    defunctDate?: number
    medias?: Media[]
    editions?: EventEdition[]
}

export interface EventEdition {
    id: number
    createdAt: number
    updatedAt: number
    editionName: string
    startDate?: number
    endDate?: number
    eventType: EventType
    companies: string[]
    games: string[]
}
