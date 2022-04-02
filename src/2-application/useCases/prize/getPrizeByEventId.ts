import { IPrizeRepository, IPrizeRepositoryToken } from '#application/repositories/iPrize'
import { prizeNotFound } from '#application/module/errors/prize'
import Container, { Inject } from 'typedi'
import { Output } from '#application/dto/output'
import { Prize } from '#enterprise/entities/prize'

export class GetPrizeByEventIdUseCase {

    @Inject(IPrizeRepositoryToken)
    private readonly prizeRepository: IPrizeRepository = Container.get(IPrizeRepositoryToken)

    async run(eventId: string): Promise<Output<Prize[] | string>> {
        const prizes = await this.prizeRepository.getPrizeByEventId(eventId)

        if (prizes.length <= 0) {
            return prizeNotFound
        }

        return {
            data: prizes,
            status: 200
        }
    }
}
