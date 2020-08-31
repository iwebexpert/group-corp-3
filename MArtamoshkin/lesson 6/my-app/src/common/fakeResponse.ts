export const fakeUser: User = {
    avatar: 'https://html5css.ru/w3images/avatar2.png',
    name: 'Bot',
    id: 2
};

const messagesStub: string[] = [
    'Приветствуем вас в чате! Здесь вы можете задать все интересующие вас вопросы.',
    'Здравствуйте! Я виртуальный помощник. \n\r Удовольствием отвечу на ваши вопросы.',
    'Я не понял ваш вопрос.\n Сформулируйте его в нескольких словах.',
    'Пожалуйста, подождите. \n Я уже ищу оператора, который ответит на ваш вопрос.'
];

const generateTextMessage = (responseStep: number): string => {
    if(responseStep < messagesStub.length) {
        return messagesStub[responseStep];
    } else {
        return messagesStub[messagesStub.length - 1];
    }
};

export const getFakeResponse = (responseStep: number): Message => {
    const message = {
        text: generateTextMessage(responseStep),
        date: new Date(),
        author: {...fakeUser}
    };

    return message;
};
