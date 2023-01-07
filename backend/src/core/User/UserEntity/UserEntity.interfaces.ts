interface IUserModel {
  id: number;
  name: string;
  login: string;
  pass: string;
}

interface IUserModelCreation extends Omit<IUserModel, "id"> {}

export type { IUserModel, IUserModelCreation };
