import express from 'express'
import { getPrize } from '#framework/functions/getPrizeById'

const prefix = 'prize'
const prizeRouter = express.Router();

prizeRouter.get(`/${prefix}/:prizeId`, getPrize)

export { prizeRouter }