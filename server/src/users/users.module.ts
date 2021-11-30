import { MiddlewareConsumer, Module } from "@nestjs/common";
import { MulterModule } from "@nestjs/platform-express";
import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "./user.model";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";

@Module({
    imports: [
        SequelizeModule.forFeature([User]),
        MulterModule.register({
            dest: './uploads'
        }),],
    controllers: [UsersController],
    providers: [UsersService],
    exports: [SequelizeModule]
})
export class UsersModule {
}