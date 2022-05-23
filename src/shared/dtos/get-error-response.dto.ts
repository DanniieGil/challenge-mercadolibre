export interface GetErrorResponseDto {
  message: string;
  error:   string;
  status?:  number;
  cause?:   any[];
}
