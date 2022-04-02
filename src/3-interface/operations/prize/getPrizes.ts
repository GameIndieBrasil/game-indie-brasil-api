import { Output } from '#application/dto/output'
import { IError } from '#application/module/errors/generic'
import { GetPrizesUseCase } from '#application/useCases/prize/getPrizes'
import { Prize } from '#enterprise/entities/prize'

export class GetPrizesOperation {

    private readonly getPrizesUseCase = new GetPrizesUseCase()

    async run(): Promise<Output<Prize[] | IError>> {
        const output = await this.getPrizesUseCase.run().then((result) => {
            return {
                status: result.status,
                data: result.data
            }
        })
        return output
    }
}
