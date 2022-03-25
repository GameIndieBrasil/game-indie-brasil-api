import { Token } from 'typedi/Token'
import { CompanyGame } from '#enterprise/entities/companyGame'

export const ICompanyGameRepositoryToken = new Token<ICompanyGameRepository>()

export interface ICompanyGameRepository {
    getCompanyGameById(companyGameId: string): Promise<CompanyGame>
    getCompanyGames(companyId: string): Promise<CompanyGame[]>
    getGameCompanies(gameId: string): Promise<CompanyGame[]>
    create(companyGame: CompanyGame): Promise<CompanyGame>
    update(companyGame: CompanyGame): Promise<CompanyGame>
}
