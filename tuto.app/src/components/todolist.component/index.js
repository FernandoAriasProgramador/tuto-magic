class Controller {

    constructor(todoService) {

        this.todoService = todoService

        this.todos = []

        this.newTodo
    }


    addTodo(key) {

        if (event.key === 'Enter') {
            this.todoService.add({
                    iD: 0,
                    name: this.newTodo,
                    dateInit: Date.now(),
                    do: false
                })
                .then(info => {
                    this.todos.push(info.data)
                    this.newTodo = ''
                })
        }
    }

    updateTodo(todo) {
        this.todoService.add({
                iD: todo.id,
                name: todo.name,
                dateInit: Date.now(),
                do: todo.do
            })
            .then(info => {
                this.todos.map((item, index) => {
                    if (item.id === info.data.id) {
                        this.todos.splice(index, 1, info.data)
                        return
                    }
                })

            })
    }

    deleteTodo(id) {
        this.todoService.remove(id)
            .then(info => {
                this.todos = this.todos.filter(item => {
                    return item.id !== info.data
                })
            })
    }

    $onInit() {
        this.todoService.list()
            .then(info => {
                this.todos = info.data
            })
    }

}

export default {
    selector: 'todoList',
    template: require('./template.html'),
    controllerAs: 'vm',
    controller: Controller
}
