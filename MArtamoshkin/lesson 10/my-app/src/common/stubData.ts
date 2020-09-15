export const usersStub: Author[] = [
    {
        name: 'Bot 1',
        id: 1,
        avatar: 'https://html5css.ru/w3images/avatar2.png'
    },
    {
        name: 'Bot 2',
        id: 2,
        avatar: 'https://html5css.ru/w3images/avatar3.png'
    },
    {
        name: 'Bot 3',
        id: 3,
        avatar: 'https://html5css.ru/w3images/avatar4.png'
    },
    {
        name: 'Bot 4',
        id: 4,
        avatar: 'https://html5css.ru/w3images/avatar5.png'
    },
    {
        name: 'Bot 5',
        id: 5,
        avatar: 'https://html5css.ru/w3images/avatar6.png'
    },
    { name: 'Bot 7', avatar: 'https://html5css.ru/w3images/avatar4.png', id: 6 },
    { name: 'Bot 8', avatar: 'https://html5css.ru/w3images/avatar3.png', id: 7 },
    { name: 'Bot 9', avatar: 'https://html5css.ru/w3images/avatar1.png', id: 8 }
];

export const addChatMessage = (id: number, message: Message) => {
    chatsStub = chatsStub.map((item: Chat) => {
        if (item.id === id) {
            item.messages = [...item.messages, message];
        }

        return item;
    })
}

export let chatsStub: Chat[] = [
    {
        id: 1,
        author: usersStub[0],
        messages: [{ "text": "Hello", "date": "2020-09-01T19:44:00.350Z", "author": 0 }, { "text": "Здравствуйте! Я виртуальный помощник. \n\r Удовольствием отвечу на ваши вопросы.", "date": "2020-09-01T19:44:09.847Z", "author": 1 }, { "text": "How are you?", "date": "2020-09-01T19:44:10.296Z", "author": 0 }, { "text": "Я не понял ваш вопрос.\n Сформулируйте его в нескольких словах.", "date": "2020-09-01T19:44:20.544Z", "author": 1 }],
    },
    {
        id: 2,
        author: usersStub[1],
        messages: [{ "text": "Здравствуйте!", "date": "2020-09-02T18:55:22.745Z", "author": 0 }, { "text": "Приветствуем вас в чате! Здесь вы можете задать все интересующие вас вопросы.", "date": "2020-09-02T18:55:29.017Z", "author": 2 }],
    },
    {
        id: 3,
        author: usersStub[2],
        messages: [{ "text": "Привет", "date": "2020-09-02T19:08:24.061Z", "author": 0 }, { "text": "Приветствуем вас в чате! Здесь вы можете задать все интересующие вас вопросы.", "date": "2020-09-02T19:08:30.305Z", "author": 3 }, { "text": "12345", "date": "2020-09-02T19:09:22.048Z", "author": 0 }, { "text": "Тестовый текст", "date": "2020-09-02T19:09:44.280Z", "author": 0 }],
    },
    {
        id: 4,
        author: usersStub[3],
        messages: [{ "text": "Тестовый текст сообщения", "date": "2020-09-02T19:36:19.949Z", "author": 0 }],
    },
    {
        id: 5,
        author: usersStub[4],
        messages: []
    },
];
