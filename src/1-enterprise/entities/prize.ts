import { WinnerType } from "#enterprise/enums/winnerType";

export interface Prize {
    id: string
    createdAt: Date
    updatedAt: Date
    eventId: string
    name: string
    winnerId: string
    winnerType: WinnerType
}