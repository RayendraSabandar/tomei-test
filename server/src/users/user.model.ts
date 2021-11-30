import { Column, Model, Table, Unique, AutoIncrement, IsEmail, PrimaryKey } from 'sequelize-typescript';

@Table
export class User extends Model {
	@PrimaryKey
	@AutoIncrement
	@Column
	id: number;

	@Column
	name: string;

	@IsEmail
	@Unique
	@Column
	email: string;

	@Column
	password: string;

	@Column
	avatar: string;
}