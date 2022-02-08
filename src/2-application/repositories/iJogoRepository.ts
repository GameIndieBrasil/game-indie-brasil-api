import { Token } from 'typedi/Token'
import { Jogo } from '#enterprise/entities/jogo'

export const IJogoRepositoryToken = new Token<IJogoRepository>()

export interface IJogoRepository {
  getJogoById (jogoId: string): Promise<Jogo | undefined>
  getJogos (): Promise<Jogo[]>
  create (jogo: Jogo): Promise<Jogo>
  update (jogo: Jogo): Promise<Jogo | undefined>
}
