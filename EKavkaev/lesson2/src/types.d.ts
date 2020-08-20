type TodoElementType = {
    id: number;
    text: string;
    checked: boolean;
}

type TodoElementProps = {
    item: TodoElement;
    removeItem: (id:number) => void;
    checkItem: (id:number) => void;
};

type TodoListProps = {
    items: TodoElementType[];
    removeItem: (id:number) => void;
    checkItem: (id:number) => void;
};

type TodoFormProps = {
    addItem: (itemText:string) => void;
};

type TodoFormState = {
    value: string;
};