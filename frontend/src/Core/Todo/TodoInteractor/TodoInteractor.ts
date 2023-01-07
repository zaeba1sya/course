import { createAsyncThunk } from "@reduxjs/toolkit";
import { Thunk } from "../../types";

import { TodoEntity } from "../TodoEntity";
import { TodoRepository } from '../TodoRepository'

export interface ITodoInteractor {
    getTodos: Thunk<void>;
}

export const createTodoInteractor = (
    Entity: typeof TodoEntity,
    Repository: typeof TodoRepository,
): ITodoInteractor => ({
    getTodos: createAsyncThunk('TodoInteractor/getTodos', async (_, { dispatch }) => {
        try {
            dispatch(Entity.actions.setLoading(true));
            const res = await Repository.getTodos();
            if (res) {
                dispatch(Entity.actions.setTodos(res.data));
            }
        } catch (err) {
            // dispatch(Entity.actions.setError(err.message));
            console.log(err);
        } finally {
            dispatch(Entity.actions.setLoading(false));
        }
    }),
});

export const TodoInteractor = createTodoInteractor(TodoEntity, TodoRepository);