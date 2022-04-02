import { Output } from '#application/dto/output'
import { badRequest, IError } from '#application/module/errors/generic'
import { GetPrizeByEventIdUseCase } from '#application/useCases/prize/getPrizeByEventId'
import { Prize } from '#enterprise/entities/prize'
import { InputGetById } from '#interface/serializers/inputGetById'
import { Request } from 'express'

export class GetPrizeByEventIdOperation {

    private readonly getPrizeByEventIdUseCase = new GetPrizeByEventIdUseCase()

    async run(req: Request): Promise<Output<Prize[] | IError>> {
        const input = new InputGetById({id: req.params.prizeId})
        if (!input.isValid()) {
            return badRequest
        }

        const output = await this.getPrizeByEventIdUseCase.run(input.id).then((result) => {
            return {
                status: result.status,
                data: result.data
            }
        })
        return output
    }
}
