export interface Task {
	id: string;
	title: string;
	description: string;
	creator: number;
	assignee: number;
	project: number;
	done: boolean;
	deadline: string;
	createdAt: string;
	modifiedAt: string;
	labels: [];
}
