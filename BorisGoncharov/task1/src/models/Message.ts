export default interface MessageModel {
    id: string;
    text: string;
    author?: string;
    date?: Date;
}