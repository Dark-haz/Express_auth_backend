
export class ApiResponse<T = any> {
  statusCode: number;
  isSuccess: boolean = true;
  errorMessages: string[] = [];
  result?: T | null;

  constructor(
    statusCode: number = 200,
    isSuccess: boolean = true,
    errorMessages: string[] = [],
    result?: T | null
  ) {
    this.statusCode = statusCode;
    this.isSuccess = isSuccess;
    this.errorMessages = errorMessages;
    this.result = result ?? null;
  }
}
