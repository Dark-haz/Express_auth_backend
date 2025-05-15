export class ServiceException extends Error {
    public statusCode: number;
  
    constructor(message: string, statusCode: number = 500) {
      super(message);
      this.name = this.constructor.name;
      this.statusCode = statusCode;
  
      // Ensure the stack trace starts from where the error is thrown
      Error.captureStackTrace(this, this.constructor);
    }
  }



if(require.main === module) {
  try {
    throw new ServiceException('User not found', 404);
  } catch (error) {
    if (error instanceof ServiceException) {
      console.log('Custom error caught!');
      console.log('Status Code:', error.statusCode); 
      console.log('Message:', error.message);         
    } else {
      console.error('Unexpected error:', error);
    }
  }
}