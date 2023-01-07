type ITodo = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

interface ITodoEntityState {
    todos: ITodo[]
}

export type {
    ITodoEntityState,
    ITodo
}