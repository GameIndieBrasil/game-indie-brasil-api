import { GameStatus } from "#enterprise/enums/gameStatus";
import { Platform } from "#enterprise/enums/platform";
import { Genre } from "./genre";
import { Media } from "./media";
import { Prize } from "./prize";

export interface Game {
<<<<<<< HEAD
    id: string
    createdAt: number
    updatedAt: number
=======
    id: number
    createdAt: number
    updatedAt: number
>>>>>>> parent of 429dd0d (Set default ids to string (planning to use uuid))
    name: string
    slug: string
    description: string
    medias?: Media[]
    minAge?: number
    release?: PlatformRelease[]
    prizes?: Prize[]
    genres?: Genre[]
}

interface PlatformRelease {
    platform: Platform
    releaseDate: number
    releaseStatus: GameStatus
    url: string
}
