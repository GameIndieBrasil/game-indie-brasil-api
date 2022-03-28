import { MediaType } from "#enterprise/enums/mediaType";

export interface Media {
<<<<<<< HEAD
    id: string
    createdAt: number
    updatedAt: number
=======
    id: number
    createdAt: number
    updatedAt: number
>>>>>>> parent of 429dd0d (Set default ids to string (planning to use uuid))
    location: string
    type: MediaType
    description?: string
    archiveLocation?: string
}
