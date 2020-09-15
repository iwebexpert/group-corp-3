type Message = {
  id: string;
  chatId: string;
  text: string;
  author: User;
  date: string;
  closable: boolean;
};

type Chat = {
  title: string;
  id: string;
  typingAuthor?: string;
};

type Theme = 'light' | 'dark';

type Language = 'en' | 'ru';

type Settings = {
  user: User;
  theme: Theme;
  language: Language;
};

type User = {
  id: string;
  name: string;
}