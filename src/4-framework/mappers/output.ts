import { Output } from '#application/dto/output'

export async function OutputFunction<T>(resultAsync: Promise<Output<T>>) {
    const outputResponse = {
        statusCode: 500,
        body: {}
    }
    const result = await resultAsync
    outputResponse.statusCode = result.statusCode
    outputResponse.body = JSON.stringify(result.data)
    console.log(outputResponse)
    return outputResponse
}
