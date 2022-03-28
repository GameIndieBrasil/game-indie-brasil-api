import { WinnerType } from "#enterprise/enums/winnerType";

export interface Prize {
<<<<<<< HEAD
    id: string
    createdAt: number
    updatedAt: number
    eventId: string
=======
    id: number
    createdAt: number
    updatedAt: number
    eventId: number
>>>>>>> parent of 429dd0d (Set default ids to string (planning to use uuid))
    name: string
    winnerId: string
    winnerType: WinnerType
}