import { Token } from 'typedi/Token'
import { Midia } from '#enterprise/entities/midia'

export const IMidiaRepositoryToken = new Token<MidiaRepository>()

export interface MidiaRepository {
  getMidiaById (midiaId: string): Promise<Midia | undefined>
  getMidias (): Promise<Midia[]>
  create (midia: Midia): Promise<Midia>
  update (midia: Midia): Promise<Midia | undefined>
}
