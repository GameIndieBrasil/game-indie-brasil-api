import { Output } from '#application/dto/output'
import { badRequest, IError } from '#application/module/errors/generic'
import { GetPrizeByWinnerIdUseCase } from '#application/useCases/prize/getPrizeByWinnerId'
import { Prize } from '#enterprise/entities/prize'
import { InputGetPrizeByWinnerId } from '#interface/serializers/prize/inputGetPrizeByWinnerId'
import { Request } from 'express'

export class GetPrizeByWinnerIdOperation {

    private readonly getPrizeByWinnerIdUseCase = new GetPrizeByWinnerIdUseCase()

    async run(req: Request): Promise<Output<Prize[] | IError>> {
        const input = new InputGetPrizeByWinnerId({
            winnerId: req.params.winnerId,
            winnerType: req.params.winnerType
        })
        if (!input.isValid()) {
            return badRequest
        }

        const output = await this.getPrizeByWinnerIdUseCase.run(
            input.winnerId, input.winnerType
        ).then((result) => {
            return {
                status: result.status,
                data: result.data
            }
        })
        return output
    }
}
