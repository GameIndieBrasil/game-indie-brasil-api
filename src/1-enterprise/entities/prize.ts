import { WinnerType } from "#enterprise/enums/winnerType";

export interface Prize {
    id: string
    createdAt: number
    updatedAt: number
    eventId: string
    name: string
    winnerId: string
    winnerType: WinnerType
}