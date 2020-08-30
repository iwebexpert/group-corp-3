export interface SimpleTask {
    body: string;
    isCompleted: boolean;
}

export interface TaskGeneratorProps {
    onCreateTask?: (task:SimpleTask) => void;
}
export interface TaskGeneratorState {
    taskBody: string;
}

export interface TodoListState {
    tasks: SimpleTask[];
}

export interface TaskListProps extends TodoListState {
    onChangeTaskList?: (tasks: SimpleTask[]) => void;
}

export enum MessageAuthor {
    User,
    Bot
}
export interface Message {
    author: MessageAuthor;
    content: string;
    authorName?: string;
}
export interface MessagesAreaProps {
    messages: Message[];
}
export enum AppLang {
    RU,
    EN
}

export enum AppTheme {
    Dark,
    Light
}
export interface AppSettings {
    userName: string;
    lang: AppLang;
    theme: AppTheme;
}