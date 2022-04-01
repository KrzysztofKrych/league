export interface LeagueDto {
  _id: string;
  name: string;
  season: string;
  results: ResultDto[];
}

export interface ResultDto {
  won: number;
  lost: number;
  draw: number;
  points: number;
  teamId: string;
  position: number;
}
