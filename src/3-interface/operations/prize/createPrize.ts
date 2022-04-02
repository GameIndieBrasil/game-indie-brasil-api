import { Output } from '#application/dto/output'
import { badRequest, IError } from '#application/module/errors/generic'
import { CreatePrizeUseCase } from '#application/useCases/prize/createPrize'
import { Prize } from '#enterprise/entities/prize'
import { Request } from 'express'

export class CreatePrizeOperation {

    private readonly createPrizeUseCase = new CreatePrizeUseCase()

    async run(req: Request): Promise<Output<Prize | IError>> {
        const input = req.body as Prize
        if (!input || !input.id){
            return badRequest
        }

        const output = await this.createPrizeUseCase.run(input).then((result) => {
            return {
                status: result.status,
                data: result.data
            }
        })
        return output
    }
}
