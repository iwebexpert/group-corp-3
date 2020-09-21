type Message = {
  id: string;
  chatId: string;
  text: string;
  authorId: string;
  authorName: string;
  date: string;
  closable: boolean;
  sentOnServer: boolean;
};

type Chat = {
  title: string;
  id: string;
  isUnread: boolean;
  typingAuthor: string;
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

type ThunkExtraArgs = {
  baseUrl: string;
}