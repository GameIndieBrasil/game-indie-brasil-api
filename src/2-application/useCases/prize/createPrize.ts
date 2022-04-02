import { IPrizeRepository, IPrizeRepositoryToken } from '#application/repositories/iPrize'
import { prizeNotCreated } from '#application/module/errors/prize'
import Container, { Inject } from 'typedi'
import { Output } from '#application/dto/output'
import { Prize } from '#enterprise/entities/prize'

export class CreatePrizeUseCase {

    @Inject(IPrizeRepositoryToken)
    private readonly prizeRepository: IPrizeRepository = Container.get(IPrizeRepositoryToken)

    async run(prize: Prize): Promise<Output<Prize | string>> {
        const createdPrize = await this.prizeRepository.create(prize)

        if (!createdPrize) {
            return prizeNotCreated
        }

        return {
            data: createdPrize,
            status: 200
        }
    }
}
