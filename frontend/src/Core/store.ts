import { configureStore } from "@reduxjs/toolkit";
import { useSelector } from 'react-redux';

import { AppEntity } from "./App/AppEntity";

import { TodoEntity } from "./Todo/TodoEntity";

import { TodoInteractor } from "./Todo/TodoInteractor";
import type { ITodoInteractor } from "./Todo/TodoInteractor";

export const store = configureStore({
    reducer: {
        App: AppEntity.reducer,
        Todo: TodoEntity.reducer
    },
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware({
            serializableCheck: false
        })
    ]
})

export type IStore = ReturnType<typeof store.getState>;

interface IActions {
    App: typeof AppEntity.actions;
    Todo: typeof TodoEntity.actions;
}

export const actions: IActions = {
    App: AppEntity.actions,
    Todo: TodoEntity.actions,
}

interface IAsyncActions {
    Todo: ITodoInteractor;
}

export const asyncActions: IAsyncActions = {
    Todo: TodoInteractor,
}

export const useStore = <T>(
    selector: (store: IStore) => T,
): { store: T; actions: IActions; asyncActions: IAsyncActions } => ({
        actions,
        asyncActions,
        store: useSelector(selector)
});