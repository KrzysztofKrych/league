export interface LeagueDto {
  _id: string;
  name: string;
  season: string;
  results: ResultDto[];
}

export interface TeamDto {
  _id: string;
  name: string;
  players: string[];
}

export interface ResultDto {
  won: number;
  lost: number;
  draw: number;
  points: number;
  teamId: string;
  team: TeamDto;
  position: number;
}
