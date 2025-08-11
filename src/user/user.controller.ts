import { Body, Controller, Post, Get } from '@nestjs/common';
import {Prisma, User as UserModel} from "@prisma/client";
import { UserService } from './user.service';
@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}
    
    @Get()
    helloWorld(): string {
        return "ESTAMOS AO VIVO BRASIL!";
    }
    
    @Post('signup')
    async signupUser(
        @Body() userData: Prisma.UserCreateInput
    ) : Promise<UserModel> {
        return this.userService.createUser(userData)
    }

}
