import { Token } from 'typedi/Token'
import { EdicaoEvento } from '#enterprise/entities/edicaoEvento'

export const IEdicaoEventoRepositoryToken = new Token<IEdicaoEventoRepository>()

export interface IEdicaoEventoRepository {
  getEdicaoEventoById (edicaoEventoId: string): Promise<EdicaoEvento | undefined>
  getEdicaoEventos (): Promise<EdicaoEvento[]>
  create (edicaoEvento: EdicaoEvento): Promise<EdicaoEvento>
  update (edicaoEvento: EdicaoEvento): Promise<EdicaoEvento | undefined>
}
