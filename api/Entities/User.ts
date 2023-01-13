import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Userauth {
	@PrimaryGeneratedColumn({type: "int"})
	id: number;

	@Column({type: "varchar", width: 200})
	name: string;

	@Column({type: "varchar", width: 200})
	email: string;

	@Column({type: "varchar", width: 45})
	username: string;

	@Column({type: "varchar", width: 200})
	password: string;
}
