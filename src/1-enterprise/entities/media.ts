import { MediaType } from "#enterprise/enums/mediaType";

export interface Media {
    id: number
    createdAt: Date
    updatedAt: Date
    location: string
    type: MediaType
    description?: string
    archiveLocation?: string
}
