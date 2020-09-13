
export class MessageData {

    constructor(
        public readonly text: string,
        public readonly author: string,
        public readonly isFromUser: boolean) {
    }



    private static readonly botName = 'Голливуд';
    private static readonly userName = 'Вы';


    public static answerFromBot() {
        return new MessageData('Не пишите нам, мы сами вам напишем!', this.botName, false);
    }
}
