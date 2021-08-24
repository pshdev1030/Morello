export interface userInfo {
  name: string;
  email: string;
  token: string;
}

export interface toDoList {
  title: string;
  todo: toDo[];
  id: number;
}

export interface toDo {
  value: string;
  done: boolean;
  id: number;
}
