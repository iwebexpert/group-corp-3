import './ToDoList.css';
import React from "react";
import { ToDo, ToDoService, UnSavedToDo } from "./Logic/ToDoService";
import { ToDoElement } from "./Components/ToDoElement/ToDoElement";
import { ToDoForm } from "./Components/ToDoForm/ToDoForm";
import { LangString, Langs, LangText} from '../Langs';


type Props = {
}

type State = {
    list: ToDo[]
}

export class ToDoList extends React.Component<Props, State> { 
    
    constructor(props: Props) {
        super(props);

        this._service = new ToDoService();
        
        this.state = {
            list: []
        };
    }

    private _service : ToDoService;

    public componentDidMount(): void {
        this.refresh();
    }

    private refresh = () => {
        this._service.getAll()
            .then(all => this.setState({list: all}));
    }

    private onAdd = (todo: UnSavedToDo) => {
        this._service.save(todo).then(saved => {
            this.setState({list: this.state.list.concat(saved)})
        });
    }

    private onChange = (todo: ToDo) => {
        
        const iExist = this.state.list.findIndex(t => t.id === todo.id);
        if (iExist >= 0 && iExist < this.state.list.length) {
            const list = [...this.state.list]; 
            list.splice(iExist, 1, todo)
            this.setState({list});
        }
        else {
            this.setState({list: this.state.list.concat(todo)})
        }

        this._service.save(todo).then(saved => {});
    };

    private onRemove = (todo: ToDo) => {
        const iExist = this.state.list.findIndex(t => t.id === todo.id);
        if (iExist >= 0 && iExist < this.state.list.length) {
            const list = [...this.state.list]
            list.splice(iExist, 1)
            this.setState( {list} )

            this._service.remove(todo).then( () => {});
        }
    }

    public render() {
        const header: LangString = { 
            [Langs.RU]: 'Список дел',
            [Langs.EN]: 'TODO List'
        };       
        const items = this.state.list.map(todo => {
            return <ToDoElement todo={todo} key={todo.id} onChange={this.onChange} onRemove={this.onRemove}/> 
        })
        return <div className="todo-list"> 
            <LangText text={header}/>
            <ul>
                {items}
            </ul>
            <ToDoForm onSubmit={this.onAdd}/>
        </div>
    }
}