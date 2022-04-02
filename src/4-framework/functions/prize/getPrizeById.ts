import { serverName } from "#enterprise/consts/config";
import { GetPrizeByIdOperation } from "#interface/operations/prize/getPrizeById";
import { Request, RequestHandler, Response } from "express";
import '#framework/infrastructure/initializeDI'

export const getPrize: RequestHandler = (req: Request, res: Response) => {
    void (async () => {
        const operation = new GetPrizeByIdOperation()
        const result = await operation.run(req).then((res) => {
            console.log(JSON.stringify(res))
            return res
        })
        res.header("X-Powered-By", serverName)
        res.header("Access-Control-Allow-Methods", 'GET, POST, PUT, PATCH, DELETE')
        if (result.status) {
            res.statusCode = result.status
        }
        res.json(result)
    })()
}