import { IsNotEmpty, IsNumberString } from 'class-validator'
import { ValidateData } from '#application/module/validateData'

export class InputGetById extends ValidateData {

    @IsNotEmpty()
    @IsNumberString()
    id!: string

    constructor(obj: Partial<InputGetById>) {
        super()
        Object.assign(this, obj)
    }
}
