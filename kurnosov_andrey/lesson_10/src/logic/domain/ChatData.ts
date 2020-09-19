import { MessageData } from "./MessageData";

export enum AnswerStatus {
    Typing,
    None
}

export type ChatData = {
    id: number;
    name: string;
    messages: MessageData[];
    answerStatus: AnswerStatus;
};
