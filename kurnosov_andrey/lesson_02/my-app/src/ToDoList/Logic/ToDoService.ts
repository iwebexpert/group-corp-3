
export interface UnSavedToDo {
    id?: string,
    name: string,
    content: string,
    status: ToDoStatus
}

export interface ToDo extends UnSavedToDo {
    id: string;
}

export enum ToDoStatus {
    TODO,
    COMPLETE,
} 

export class ToDoService {

    private readonly storageKey: string = 'todo';

    private __all: null|ToDo[] = null;
    private _saveAll(): void {
        window.localStorage.setItem( this.storageKey, JSON.stringify(this.__all));
    }
    private get _all(): ToDo[] {
        let all = this.__all;
        if (all === null) {
            const stored = window.localStorage.getItem(this.storageKey);
            all = stored != null ? JSON.parse(stored) as ToDo[] : null;
            all = all || []
        }
        return this.__all = all;
    }

    public getAll(): Promise<ToDo[]> {
        const todos = this._all.map( x => ({...x}));

        return Promise.resolve(todos);
    }

    public save(todo: UnSavedToDo|ToDo): Promise<ToDo> {
        const copyWithId = (_todo: UnSavedToDo, id: string) => ({..._todo, id: id});
        const add = (_todo: UnSavedToDo, id: string) => {
            const c = copyWithId(_todo, id);
            this._all.push(c);
            return c;
        }
        const getNewId = () => '' + ( this._all.length > 0 ? Math.max(...this._all.map(x => parseInt(x.id, 10))) + 1 : 1); 
        
        let copy: ToDo;
        if (todo.id === undefined) {
            copy = add(todo, getNewId());
        }
        else { 
            const iExist = this._all.findIndex( t => t.id === todo.id )
            if ( iExist >= 0 && iExist < this._all.length)
                copy = this._all[iExist] = copyWithId(todo, todo.id);
            else
                copy = add(todo, todo.id);
        }
        this._saveAll();

        return Promise.resolve(copy);
    }

    public remove(todo: ToDo): Promise<void> {
        const iExist = this._all.findIndex( old => old.id === todo.id)
        if (iExist >= 0)
            this._all.splice(iExist, 1);
        this._saveAll();
        return Promise.resolve();
    }

}
