import { IHttpClientResponse } from "../../../libs/HTTPClient";
import { ITodo } from "../TodoEntity";

interface ITodoRepository {
    getTodos(): Promise<IHttpClientResponse<ITodo[]> | undefined>;
}

export type {
    ITodoRepository
}