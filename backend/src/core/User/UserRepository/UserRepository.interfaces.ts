import { IUserModel, IUserModelCreation } from "../UserEntity";

interface IUserRepository {
    findByPk(id: number): Promise<IUserModel>;
    create(data: IUserModelCreation): Promise<IUserModel>;
}

export type { IUserRepository };