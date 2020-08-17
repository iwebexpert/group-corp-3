type ConfigApp ={
    lang: string;
}

type TaskData = {
    TaskId: string;
    IsReady: boolean;
    Title: string;
}

type TasksBlockState = {
    Tasks: TaskData[];
}

type TaskItemsProps = {
    Tasks: TaskData[];
    DeleteHandler: any;
}

type TaskItemProps = {
    TaskItem: TaskData
    DeleteHandler: any;
}

type TaskFormProps = {
    TaskText: string;
    AddHandler: any;
}

type TaskFormState = {
    TaskText: string;
}
