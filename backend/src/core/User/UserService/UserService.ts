import { IUserModelCreation } from "../UserEntity";
import { UserRepository } from "../UserRepository";
import { IUserService } from "./UserService.interfaces";

class UserService implements IUserService {
    private readonly _userRepository: UserRepository = new UserRepository(); 

    public async get(id: number): Promise<any> {
        const user = await this._userRepository.findByPk(id);
        if (!user) {
            throw new Error();
        }
        return user;
    }

    public async create(data: IUserModelCreation): Promise<any> {
        const user = await this._userRepository.create(data);

        if (!user) {
            throw new Error();
        }

        return user;
    }
}

export { UserService };