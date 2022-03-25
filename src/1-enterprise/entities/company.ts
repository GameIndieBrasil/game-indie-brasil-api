import { CompanyType } from "#enterprise/enums/companyType"
import { Address } from "./address"
import { Media } from "./media"
import { Prize } from "./prize"

export interface Company {
    id: number
    createdAt: Date
    updatedAt: Date
    name: string
    slug: string
    description: string
    email?: string
    medias?: Media[]
    address?: Address
    active: boolean
    associations?: CompanyAssociation[]
    foundDate?: Date
    defunctDate?: Date
    prizes?: Prize[]
    companyType: CompanyType
}

export interface CompanyAssociation {
    id: number
    createdAt: Date
    updatedAt: Date
    associationCompanyId: number
    active: boolean
    startDate?: Date
    endDate?: Date
}
