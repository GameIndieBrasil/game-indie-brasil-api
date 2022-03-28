import { CompanyType } from "#enterprise/enums/companyType"
import { Address } from "./address"
import { Media } from "./media"
import { Prize } from "./prize"

export interface Company {
    id: string
    createdAt: number
    updatedAt: number
    name: string
    slug: string
    description: string
    email?: string
    medias?: Media[]
    address?: Address
    active: boolean
    associations?: CompanyAssociation[]
    foundDate?: number
    defunctDate?: number
    prizes?: Prize[]
    companyType: CompanyType
}

export interface CompanyAssociation {
    id: string
    createdAt: number
    updatedAt: number
    associationCompanyId: string
    active: boolean
    startDate?: number
    endDate?: number
}
