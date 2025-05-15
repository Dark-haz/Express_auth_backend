export class ApiResponse {
    constructor({ statusCode = 200, isSuccess = true, errorMessages = [], result = null }) {
      this.statusCode = statusCode;
      this.isSuccess = isSuccess;
      this.errorMessages = errorMessages;
      this.result = result;
    }
  }