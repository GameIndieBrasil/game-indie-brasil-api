import { Token } from 'typedi/Token'
import { Company } from '#enterprise/entities/company'

export const ICompanyRepositoryToken = new Token<ICompanyRepository>()

export interface ICompanyRepository {
    getCompanyById(companyId: string): Promise<Company>
    getCompanyByState(stateId: string): Promise<Company[]>
    getCompanyByCompanyType(stateId: string): Promise<Company[]>
    getCompaniesByAwardedPrizeInEvent(eventId: string): Promise<Company[]>
    getCompaniesByFoundDate(startDate: string, endDate: string): Promise<Company[]>
    getCompaniesByDefunctDate(startDate: string, endDate: string): Promise<Company[]>
    getCompaniesByAssociation(associationCompanyId: string): Promise<Company[]>
    getCompanies(): Promise<Company[]>
    getActiveCompanies(): Promise<Company[]>
    create(company: Company): Promise<Company>
    update(company: Company): Promise<Company>
}
