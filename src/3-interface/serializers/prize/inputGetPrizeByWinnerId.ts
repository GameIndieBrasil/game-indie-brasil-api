import { IsNotEmpty, IsNumberString } from 'class-validator'
import { ValidateData } from '#application/module/validateData'

export class InputGetPrizeByWinnerId extends ValidateData {

    @IsNotEmpty()
    @IsNumberString()
    winnerId!: string

    @IsNotEmpty()
    @IsNumberString()
    winnerType!: string

    constructor(obj: Partial<InputGetPrizeByWinnerId>) {
        super()
        Object.assign(this, obj)
    }
}
