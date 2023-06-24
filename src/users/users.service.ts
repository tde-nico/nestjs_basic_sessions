import { Injectable } from '@nestjs/common';

export type User = {
	id: number;
	name: string;
	username: string;
	password: string;
}

@Injectable()
export class UsersService {
	private readonly users: User[] = [
		{
			id: 1,
			name: 'Tommaso',
			username: 'tommy',
			password: 'test',
		},
		{
			id: 2,
			name: 'Mario',
			username: 'mario',
			password: 'jump',
		},
	];

	async findOne(username: string): Promise<User | undefined> {
		return this.users.find(user => user.username === username);
	}
}
