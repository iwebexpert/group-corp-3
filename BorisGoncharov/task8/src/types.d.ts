type Settings = {
    name: string;
    setName: (value: string) => void;
    theme: string;
    setTheme: (value: string) => void;
    language: string;
    setLanguage: (value: string) => void;
    version: string;
    setVersion: (value: string) => void;
};

type Message = {
    id: string;
    text: string;
    author: string;
    date: string;
    closable: boolean;
    chatId: string;
    isBot?: boolean;
};

type Chat = {
    title: string;
    id: string;
};