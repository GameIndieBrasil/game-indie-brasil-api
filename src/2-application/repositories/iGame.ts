import { Token } from 'typedi/Token'
import { Game } from '#enterprise/entities/game'

export const IGameRepositoryToken = new Token<IGameRepository>()

export interface IGameRepository {
    getGameById(gameId: string): Promise<Game>
    getGames(): Promise<Game[]>
    getGamesByMinAge(minAge: string): Promise<Game[]>
    getGamesByRelease(releaseDate: string, releaseStatus: string, platform: string): Promise<Game[]>
    getGamesByGenre(genre: string): Promise<Game[]>
    getGamesByAwardedPrizeInEvent(eventId: string): Promise<Game[]>
    getGamesByDate(startDate: string, endDate: string): Promise<Game[]>
    create(game: Game): Promise<Game>
    update(game: Game): Promise<Game>
}
