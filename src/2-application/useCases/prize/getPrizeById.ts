import { IPrizeRepository, IPrizeRepositoryToken } from '#application/repositories/iPrize'
import { prizeNotFound } from '#application/module/errors/prize'
import Container, { Inject } from 'typedi'
import { Output } from '#application/dto/output'
import { Prize } from '#enterprise/entities/prize'

export class GetPrizeByIdUseCase {

    @Inject(IPrizeRepositoryToken)
    private readonly prizeRepository: IPrizeRepository = Container.get(IPrizeRepositoryToken)

    async run(prizeId: string): Promise<Output<Prize | string>> {
        const prize = await this.prizeRepository.getPrizeById(prizeId)

        if (!prize) {
            return prizeNotFound
        }

        return {
            data: prize,
            status: 200
        }
    }
}
