import { Subject } from 'rxjs';
import { AppSettings } from '../../shared/types';

const subject = new Subject<AppSettings>();
export const appSettingsService = {
    changeSettings: (settings: AppSettings) => subject.next(settings),
    settingsObservable: () => subject.asObservable()
};