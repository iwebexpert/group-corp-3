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
        text: 'Тестовый текст от бота в списке чатов',
        author: usersStub[0],
        messages: [{ "text": "Hello", "date": "2020-09-01T19:44:00.350Z", "author": 0 }, { "text": "Здравствуйте! Я виртуальный помощник. \n\r Удовольствием отвечу на ваши вопросы.", "date": "2020-09-01T19:44:09.847Z", "author": 1 }, { "text": "How are you?", "date": "2020-09-01T19:44:10.296Z", "author": 0 }, { "text": "Я не понял ваш вопрос.\n Сформулируйте его в нескольких словах.", "date": "2020-09-01T19:44:20.544Z", "author": 1 }],
        date: new Date()
    },
    {
        id: 2,
        text: 'Тестовый текст от бота в списке чатов',
        author: usersStub[1],
        messages: [],
        date: new Date()
    },
    {
        id: 3,
        text: 'Тестовый текст от бота в списке чатов',
        author: usersStub[2],
        messages: [],
        date: new Date()
    },
    {
        id: 4,
        text: 'Тестовый текст от бота в списке чатов',
        author: usersStub[3],
        messages: [],
        date: new Date()
    },
    {
        id: 5,
        text: 'Тестовый текст от бота в списке чатов',
        author: usersStub[4],
        messages: [],
        date: new Date()
    },
];
