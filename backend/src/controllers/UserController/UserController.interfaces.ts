import { IUserModelCreation } from "core/User/UserEntity";

interface IUserController {
    get(id: number): Promise<any>;
    create(data: IUserModelCreation): Promise<any>;
}

export type {
    IUserController
}