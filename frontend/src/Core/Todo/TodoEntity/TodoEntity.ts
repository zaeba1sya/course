import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { withHelperReducers, withHelperState } from '../../../helpers/coreHelpers';
import type { IWithHelperState } from '../../../helpers/coreHelpers';

import type { ITodoEntityState, ITodo } from './TodoEntity.interfaces';


const initialState: ITodoEntityState & IWithHelperState = {
    ...withHelperState,
    todos: []
}

export const TodoEntity = createSlice({
    name: "TodoEntity",
    initialState,
    reducers: {
        ...withHelperReducers,
        setTodos(state, action: PayloadAction<ITodo[]>) {
            state.todos = action.payload;
        }
    }
});
