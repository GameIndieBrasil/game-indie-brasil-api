import express from "express";
import { prizeRouter } from '#framework/functions/prize/handler';
import { apiVersion } from "#enterprise/consts/config";

const app = express();

app.use(`/${apiVersion}/`, prizeRouter)

const listener = app.listen(process.env.PORT || 3000, () => {
    console.log(`Listener started with settings: ${JSON.stringify(listener.address())}`)
})
