import { IPrizeRepositoryToken } from '#application/repositories/iPrize'
import { PrizeRepository } from '#framework/repositories/prize'
import Container from 'typedi'

Container.set(IPrizeRepositoryToken, new PrizeRepository())