export class Output<T> {
    status = 500
    data: T | string = 'Internal server error'
    constructor(obj: Partial<Output<T>>) {
        Object.assign(this, obj)
    }
}
