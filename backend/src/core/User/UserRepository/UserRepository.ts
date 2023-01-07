import { IUserModel, IUserModelCreation, User } from "../UserEntity";
import { IUserRepository } from "./UserRepository.interfaces";

class UserRepository implements IUserRepository {
  public async findByPk(id: number): Promise<any> {
    return await User.findByPk(id);
  }

  public async create(data: IUserModelCreation): Promise<any> {
    return await User.create({
      name: data.name,
      login: data.login,
      pass: data.pass,
    });
  }
}

export { UserRepository };
