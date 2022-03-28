import { CompanyType } from "#enterprise/enums/companyType"
import { Address } from "./address"
import { Media } from "./media"
import { Prize } from "./prize"

export interface Company {
<<<<<<< HEAD
    id: string
    createdAt: number
    updatedAt: number
=======
    id: number
    createdAt: number
    updatedAt: number
>>>>>>> parent of 429dd0d (Set default ids to string (planning to use uuid))
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
<<<<<<< HEAD
    id: string
    createdAt: number
    updatedAt: number
    associationCompanyId: string
=======
    id: number
    createdAt: number
    updatedAt: number
    associationCompanyId: number
>>>>>>> parent of 429dd0d (Set default ids to string (planning to use uuid))
    active: boolean
    startDate?: number
    endDate?: number
}
