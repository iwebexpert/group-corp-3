import { UserModel } from "./UserModel";

export interface MessageModel {
    text: string;
    author: UserModel;
}