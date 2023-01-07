import { IUserModelCreation } from 'core/User/UserEntity';
import { UserService } from 'core/User/UserService';
import { IUserController } from './UserController.interfaces';

class UserController implements IUserController {
    private readonly _userService: UserService = new UserService();
    
    public async get(id: number): Promise<any> {
        if (!id) {
            throw new Error();
        }

        return await this._userService.get(id);
    }

    public async create(data: IUserModelCreation): Promise<any> {
        if (!data.login || !data.name || !data.pass) {
            throw new Error
        }

        return await this._userService.create(data);
    }
}

export { UserController };