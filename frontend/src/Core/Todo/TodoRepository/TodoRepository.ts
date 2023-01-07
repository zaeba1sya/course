// Deps
import { HttpClient } from '../../../libs/HTTPClient';

// Interfaces
import type { ITodoRepository } from './TodoRepository.interfaces';
import { ITodo } from '../TodoEntity';

export const TodoRepository: ITodoRepository = {
    getTodos: async () => {
        try {
            return await HttpClient.get<ITodo[]>('todos');
        } catch (err: any) {
            console.log(err);
        }
    },
};
