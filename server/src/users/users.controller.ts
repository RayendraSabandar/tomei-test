import { 
    Controller, 
    Get, 
    Post,
    Put, 
    Delete, 
    Body, 
    Param, 
    Patch, 
    UseInterceptors,
    UploadedFile
} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { UsersService } from "./users.service";


@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) {}

    @Post()
    @UseInterceptors(
        FileInterceptor('avatar'),
    )
    async registerUser(
        @Body('name') name: string,
        @Body('email') email: string,
        @Body('password') password: string,
        @UploadedFile() file
    ) {
        return this.userService.registerUser(name, email, password, file.path);
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
    @UseInterceptors(
        FileInterceptor('avatar'),
    )
    async editAvatar(
        @Param('id') id: string,
        @UploadedFile() file
    ){
        return this.userService.editAvatar(id, file.path)
    }

    @Delete(':id')
    deleteUser(
        @Param('id') id: string,
    ){
        return this.userService.deleteUser(id)
    }
}