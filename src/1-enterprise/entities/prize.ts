import { WinnerType } from "#enterprise/enums/winnerType";

export interface Prize {
    id: number
    createdAt: Date
    updatedAt: Date
    eventId: number
    name: string
    winnerId: string
    winnerType: WinnerType
}