import { Controller, Get, Post, Put, Delete, Body, Param, Patch } from "@nestjs/common";
import { UsersService } from "./users.service";


@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) {}

    @Post()
    registerUser(
        @Body('name') name: string,
        @Body('email') email: string,
        @Body('password') password: string,
        @Body('avatar') avatar: string,
    ) {
        return this.userService.registerUser(name, email, password, avatar)
    }

    @Get()
    getAllUsers(){
        return this.userService.getAllUsers()
    }

    @Get(':id')
    getUserById(@Param('id') id: string){
        return this.userService.getUserById(id)
    }

    @Patch(':id')
    editAvatar(
        @Param('id') id: string,
        @Body('avatar') avatar: string
    ){
        return this.userService.editAvatar(id, avatar)
    }

    @Delete(':id')
    deleteUser(
        @Param('id') id: string,
    ){
        return this.userService.deleteUser(id)
    }
}