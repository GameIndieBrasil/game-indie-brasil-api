import { serverName } from "#enterprise/consts/config"

export class Output<T> {
    statusCode = 500
    data: T | string = 'Internal server error'
    headers: {
        'X-Powered-By'?: string
        'Access-Control-Allow-Methods'?: string
    } = {}
    constructor(obj: Partial<Output<T>>) {
        this.headers = {
            "X-Powered-By": serverName,
            "Access-Control-Allow-Methods": 'GET, POST, PUT, PATCH, DELETE'
        }
        Object.assign(this, obj)
    }
}
