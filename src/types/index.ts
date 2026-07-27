export interface User {
  name: string;
  email: string;
  isOnline: boolean;
  id: string;
}

export interface UserData {
  name: string;
  email: string;
  isOnline: boolean;
}

export interface Book {
  author: string;
  title: string;
  year: string;
  description: string;
  id: string;
}

export interface Contact {
  id: string;

  name: string;
  city: string;
  job: string;
  number: string;
  email: string;

  hasWork: boolean;
  sex: string;

  hobbies: string[];
  description: string;
}
