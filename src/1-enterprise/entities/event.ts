import { Address } from "./address";
import { Media } from "./media";

export interface Event {
    id: number
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
}
