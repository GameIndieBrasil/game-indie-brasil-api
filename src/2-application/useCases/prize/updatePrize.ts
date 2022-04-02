import { IPrizeRepository, IPrizeRepositoryToken } from '#application/repositories/iPrize'
import { prizeNotUpdated } from '#application/module/errors/prize'
import Container, { Inject } from 'typedi'
import { Output } from '#application/dto/output'
import { Prize } from '#enterprise/entities/prize'

export class UpdatePrizeUseCase {

    @Inject(IPrizeRepositoryToken)
    private readonly prizeRepository: IPrizeRepository = Container.get(IPrizeRepositoryToken)

    async run(prize: Prize): Promise<Output<Prize | string>> {
        const updatedPrize = await this.prizeRepository.update(prize)

        if (!updatedPrize) {
            return prizeNotUpdated
        }

        return {
            data: updatedPrize,
            status: 200
        }
    }
}
