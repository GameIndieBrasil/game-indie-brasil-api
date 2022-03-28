import { WinnerType } from "#enterprise/enums/winnerType";

export interface Prize {
    id: number
    createdAt: number
    updatedAt: number
    eventId: number
    name: string
    winnerId: string
    winnerType: WinnerType
}