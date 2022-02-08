import { Token } from 'typedi/Token'
import { Premio } from '#enterprise/entities/premio'

export const IPremioRepositoryToken = new Token<PremioRepository>()

export interface PremioRepository {
  getPremioById (premioId: string): Promise<Premio | undefined>
  getPremios (): Promise<Premio[]>
  create (premio: Premio): Promise<Premio>
  update (premio: Premio): Promise<Premio | undefined>
}
