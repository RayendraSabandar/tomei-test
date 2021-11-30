import { Module, NestModule, MiddlewareConsumer  } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { User } from './users/user.model'
import { AllExceptionFilter } from './core/all-exepctions-filter';
import { APP_FILTER } from '@nestjs/core';
import { LoggerMiddleware } from './middlewares/logger.middleware';

@Module({
	imports: [
		SequelizeModule.forRootAsync({
			useFactory: () => ({
				dialect: 'mariadb',
				host: 'localhost',
				port: 3306,
				username: 'root',
				password: 'mariadb',
				database: 'tomei_development',
				models: [User],
				autoLoadModels: true,
				synchronize: true,
			}),
		}),
		UsersModule
	],
	controllers: [AppController],
	providers: [AppService, {
		provide: APP_FILTER,
		useClass: AllExceptionFilter
	}],
})
export class AppModule {
	configure(consumer: MiddlewareConsumer) {
		consumer
		  .apply(LoggerMiddleware)
		  .forRoutes('users');
	  }
}
