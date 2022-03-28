import { GameStatus } from "#enterprise/enums/gameStatus";
import { Platform } from "#enterprise/enums/platform";
import { Genre } from "./genre";
import { Media } from "./media";
import { Prize } from "./prize";

export interface Game {
    id: number
    createdAt: number
    updatedAt: number
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
