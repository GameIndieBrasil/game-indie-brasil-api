import { IPrizeRepository, IPrizeRepositoryToken } from '#application/repositories/iPrize'
import { noPrizeFound } from '#application/module/errors/prize'
import Container, { Inject } from 'typedi'
import { Output } from '#application/dto/output'
import { Prize } from '#enterprise/entities/prize'

export class GetPrizesUseCase {

    @Inject(IPrizeRepositoryToken)
    private readonly prizeRepository: IPrizeRepository = Container.get(IPrizeRepositoryToken)

    async run(): Promise<Output<Prize[] | string>> {
        const prizes = await this.prizeRepository.getPrizes()

        if (prizes.length <= 0) {
            return noPrizeFound
        }

        return {
            data: prizes,
            status: 200
        }
    }
}
