import { MediaType } from "#enterprise/enums/mediaType";

export interface Media {
    id: number
    createdAt: number
    updatedAt: number
    location: string
    type: MediaType
    description?: string
    archiveLocation?: string
}
