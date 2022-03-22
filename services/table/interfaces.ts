export interface TableItemDto {
  teamName: string;
  teamId: number;
  season: string;
  results: ResultDto;
}

export interface ResultDto {
  won: number;
  lost: number;
  draw: number;
  points: number;
}
