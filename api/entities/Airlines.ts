import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Airlines {
	@PrimaryGeneratedColumn({type: "int"})
	id: number;

	@Column({type: "varchar", width: 200})
	airlineName: string;

	@Column({type: "varchar", width: 200})
	airlineHub: string;

	@Column({type: "varchar", width: 1000})
	airlineIcon: string;
}
