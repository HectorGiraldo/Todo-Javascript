import { Todo } from ".";


export class TodoList {

    constructor() {

        // this.todos = [];
        this.cargarStorage();
    }

    nuevoTodo( todo ) {
        this.todos.push(todo);
        this.guardarStorage();
    }

    eliminarTodo ( id ){

        this.todos =  this.todos.filter( todo => todo.id != id);
        this.guardarStorage();

    }

    marcarCompletado( id ) {

        for ( const todo of this.todos ) {

            if ( todo.id == id ) {
                todo.completado = ! todo.completado;
                this.guardarStorage();
                break
            }
        }

    }

    eliminarCompletado() {
        this.todos =  this.todos.filter( todo => !todo.completado);
        this.guardarStorage();
        
    }

    guardarStorage() {
        localStorage.setItem('todo', JSON.stringify(this.todos));
    }

    cargarStorage() {

        this.todos = (localStorage.getItem('todo')) ? this.todos = JSON.parse(localStorage.getItem('todo')) : [];

        this.todos = this.todos.map( obj => Todo.fromJson(obj));

    }
}