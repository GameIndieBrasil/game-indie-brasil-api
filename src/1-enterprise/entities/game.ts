import { GameStatus } from "#enterprise/enums/gameStatus";
import { Platform } from "#enterprise/enums/platform";
import { Genre } from "./genre";
import { Media } from "./media";
import { Prize } from "./prize";

export interface Game {
    id: number
    createdAt: Date
    updatedAt: Date
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
    releaseDate: Date
    releaseStatus: GameStatus
    url: string
}
