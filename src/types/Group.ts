export interface Group {
	ID: string;
	DisplayName: string;
	Members: [];
}

interface Member {
	ID: string;
	Role: Role;
}

export enum Role {
	Admin = 'Admin',
	Member = 'Member',
}
