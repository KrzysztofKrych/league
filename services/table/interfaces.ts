export interface TableItemDto {
  teamName: string;
  id: string;
  season: string;
  results: ResultDto;
  position: number
}

export interface ResultDto {
  won: number;
  lost: number;
  draw: number;
  points: number;
}
