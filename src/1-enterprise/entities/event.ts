import { EventType } from "#enterprise/enums/eventType";
import { Address } from "./address";
import { Media } from "./media";

export interface Event {
<<<<<<< HEAD
    id: string
    createdAt: number
    updatedAt: number
=======
    id: number
    createdAt: number
    updatedAt: number
>>>>>>> parent of 429dd0d (Set default ids to string (planning to use uuid))
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
<<<<<<< HEAD
    createdAt: number
    updatedAt: number
=======
    createdAt: number
    updatedAt: number
    eventId: number
>>>>>>> parent of 429dd0d (Set default ids to string (planning to use uuid))
    editionName: string
    startDate?: number
    endDate?: number
    eventType: EventType
    companies: number[]
    games: number[]
}
