import { MediaType } from "#enterprise/enums/mediaType";

export interface Media {
    id: string
    createdAt: number
    updatedAt: number
    location: string
    type: MediaType
    description?: string
    archiveLocation?: string
}
