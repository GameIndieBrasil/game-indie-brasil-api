import { Token } from 'typedi/Token'
import { Prize } from '#enterprise/entities/prize'

export const IPrizeRepositoryToken = new Token<IPrizeRepository>()

export interface IPrizeRepository {
    getPrizeById(prizeId: string): Promise<Prize>
    getPrizeByWinnerId(winnerId: string, winnerType: string): Promise<Prize[]>
    getPrizeByEventId(eventId: string): Promise<Prize[]>
    getPrizes(): Promise<Prize[]>
    create(prize: Prize): Promise<Prize>
    update(prize: Prize): Promise<Prize>
}
