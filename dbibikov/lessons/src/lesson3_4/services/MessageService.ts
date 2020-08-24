import { Subject } from 'rxjs';
import { Message } from '../../shared/types';

const subject = new Subject<Message>();

export const messageService = {
    sendMessage: (message: Message) => subject.next(message),
    messageObservable: () => subject.asObservable()
};