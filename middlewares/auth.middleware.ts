import { expressjwt as jwt } from 'express-jwt';

export const jwtMiddleware = jwt({
  secret: process.env.JWT_SECRET!,
  algorithms: ['HS256'],
  requestProperty: 'auth', 
  getToken: (req) => req.header('x-auth-token'), 
});