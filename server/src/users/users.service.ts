import { Injectable, NotFoundException } from "@nestjs/common";
import { User } from './users.model'

@Injectable()
export class UsersService {
    private users: User[] = [];

    registerUser(name: string, email: string, password: string, avatar: string){
        const id = Math.random().toString()
        const newUser = new User(id, name, email, password, avatar)
        this.users.push(newUser)
        return id
    }

    getAllUsers(){
        return [...this.users];
    }

    getUserById(id: string){
        const user = this.findUser(id)[0]
        return {...user}
    }

    editAvatar(id: string, avatar: string){
        const [user, index] = this.findUser(id)
        this.users[index] = {
            ...user,
            avatar
        }
        return {
            message: 'Your avatar has been successfully changed'
        }
    }

    deleteUser(id: string){
        const [_, userIndex] = this.findUser(id)
        this.users.splice(userIndex, 1)

        return {
            message: 'Your account has been successfully deleted'
        }
    }

    private findUser(id: string): [User, number]{
        const userIndex = this.users.findIndex(user => user.id === id)
        const user = this.users[userIndex]

        if(!user){
            throw new NotFoundException(`User with id ${id} was not found`)
        }

        return [user, userIndex]
    }
}