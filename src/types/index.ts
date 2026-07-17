export interface Address {
  street: string;
  city: string;
  country: string;
}

export interface Dog {
  id: number;
  name: string;
  age: number;
  breed: string;
  isFriendly: boolean;
  avatar: string;
  address: Address;
}
