import { APIRequestContext } from '@playwright/test';

export class LoginAPI {

  constructor(private request: APIRequestContext) {}

  async login(email:string, password:string) {

   return await this.request.post('/login', {
    data:{
        email,
        password
    }
});

  }

}