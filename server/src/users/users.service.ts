import { HttpException, HttpStatus, Injectable, NotFoundException } from "@nestjs/common";
import { User } from "./user.model";
import { InjectModel } from '@nestjs/sequelize';
import { hashPassword } from "src/helpers/bcrypt";

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User)
        private userModel: typeof User,
      ) {}

    async registerUser(name: string, email: string, password: string, avatar: any){
        const newUser = await this.userModel.create({
            name,
            email,
            password: hashPassword(password),
            avatar
        })
        return newUser
    }

    getAllUsers(): Promise<User[]>{
        return this.userModel.findAll();
    }

    async getUserById(id: string){
        const foundUser = await this.userModel.findOne({
            where: {
              id,
            },
        });

        if(!foundUser){
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: `User with id ${id} was not found`
            }, HttpStatus.NOT_FOUND)
        }
        else {
            return foundUser
        }
    }

    async editAvatar(id: string, avatar: string){
        await this.userModel.update({avatar}, {
            where: {
                id
            }
        })
        return {
            message: 'Your avatar has been successfully changed'
        }
    }


    async deleteUser(id: string): Promise<object> {
        const user = await this.getUserById(id);
        await user.destroy();
        return {
            message: 'Your account has been successfully deleted'
        }
    }
}