import { Output } from '#application/dto/output'
import { badRequest, IError } from '#application/module/errors/generic'
import { UpdatePrizeUseCase } from '#application/useCases/prize/updatePrize'
import { Prize } from '#enterprise/entities/prize'
import { Request } from 'express'

export class UpdatePrizeOperation {

    private readonly udpatePrizeUseCase = new UpdatePrizeUseCase()

    async run(req: Request): Promise<Output<Prize | IError>> {
        const input = req.body as Prize
        if (!input || !input.id){
            return badRequest
        }

        const output = await this.udpatePrizeUseCase.run(input).then((result) => {
            return {
                status: result.status,
                data: result.data
            }
        })
        return output
    }
}
