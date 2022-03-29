import { IPrizeRepository, IPrizeRepositoryToken } from '#application/repositories/iPrize'
import { Service } from 'typedi/decorators/Service'
import { Prize } from '#enterprise/entities/prize'

@Service(IPrizeRepositoryToken)
export class PrizeRepository implements IPrizeRepository {

    create(prize: Prize): Promise<Prize> {
        const prizeCreated = {
            id: prize.id,
            createdAt: prize.createdAt,
            updatedAt: prize.updatedAt,
            eventId: prize.eventId,
            name: prize.name,
            winnerId: prize.winnerId,
            winnerType: prize.winnerType
        }
        return new Promise((resolve) => {
            resolve(prizeCreated)
        })
    }
    update(prize: Prize): Promise<Prize> {
        const prizeUpdated = prize
        prizeUpdated.id = 5
        return new Promise((resolve) => {
            resolve(prizeUpdated)
        })
    }
    getPrizeById(prizeId: string): Promise<Prize> {
        const prize = {
            id: Number(prizeId),
            createdAt: Date.now(),
            updatedAt: Date.now(),
            eventId: 2,
            name: 'string',
            winnerId: 3,
            winnerType: 4
        }
        return new Promise((resolve) => {
            resolve(prize)
        })
    }
    getPrizeByWinnerId(winnerId: string, winnerType: string): Promise<Prize[]> {
        const prize1 = {
            id: 1,
            createdAt: Date.now(),
            updatedAt: Date.now(),
            eventId: 2,
            name: 'string',
            winnerId: Number(winnerId),
            winnerType: Number(winnerType)
        }
        const prize2 = {
            id: 3,
            createdAt: Date.now(),
            updatedAt: Date.now(),
            eventId: 4,
            name: 'string',
            winnerId: Number(winnerId),
            winnerType: Number(winnerType)
        }
        const prizes: Prize[] = []
        prizes.push(prize1, prize2)
        return new Promise((resolve) => {

            resolve(prizes)
        })
    }
    getPrizeByEventId(eventId: string): Promise<Prize[]> {
        const prize1 = {
            id: 1,
            createdAt: Date.now(),
            updatedAt: Date.now(),
            eventId: Number(eventId),
            name: 'string',
            winnerId: 3,
            winnerType: 4
        }
        const prize2 = {
            id: 5,
            createdAt: Date.now(),
            updatedAt: Date.now(),
            eventId: Number(eventId),
            name: 'string',
            winnerId: 6,
            winnerType: 7
        }
        const prizes: Prize[] = []
        prizes.push(prize1, prize2)
        return new Promise((resolve) => {

            resolve(prizes)
        })
    }
    getPrizes(): Promise<Prize[]> {
        const prize1 = {
            id: Math.round(Math.random() * 50),
            createdAt: Date.now(),
            updatedAt: Date.now(),
            eventId: Math.round(Math.random() * 50),
            name: 'string',
            winnerId: Math.round(Math.random() * 50),
            winnerType: Math.round(Math.random() * 50)
        }
        const prize2 = {
            id: Math.round(Math.random() * 50),
            createdAt: Date.now(),
            updatedAt: Date.now(),
            eventId: Math.round(Math.random() * 50),
            name: 'string',
            winnerId: Math.round(Math.random() * 50),
            winnerType: Math.round(Math.random() * 50)
        }
        const prizes: Prize[] = []
        prizes.push(prize1, prize2)
        return new Promise((resolve) => {

            resolve(prizes)
        })
    }
}
