import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity("userauth")
export class userauth {
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


