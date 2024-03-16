export type Bowler = {
    team: Team;
    bowlerId: number;
    bowlerLastName: string;
    bowlerFirstName: string;
    bowlerMiddleInit?: string;
    bowlerAddress: string;
    bowlerCity: string;
    bowlerState: string;
    bowlerZip: string;
    bowlerPhoneNumber: string;
}

export type Team = {
    teamId: number;
    teamName: string;
}