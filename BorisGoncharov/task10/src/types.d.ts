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
  typingAuthor?: string;
};

type Theme = 'light' | 'dark';

type Language = 'en' | 'ru';

type Settings = {
  name: string;
  theme: Theme;
  language: Language;
};

type Author = {
  id: string;
  name: string;
}