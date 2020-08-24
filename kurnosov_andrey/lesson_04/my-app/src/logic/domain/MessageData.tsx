
export class MessageData {

    constructor(
        public text: string,
        public author: string) {
    }


    public get isFromUser(): boolean {
        return this.author === MessageData.userName;
    }


    private static readonly botName = 'Голливуд';
    private static readonly userName = 'Вы';
    public static fromUser(message: string) {
        return new MessageData(message, this.userName);
    }


    public static answerFromBot() {
        return new MessageData('Не пишите нам, мы сами вам напишем!', this.botName);
    }
}
