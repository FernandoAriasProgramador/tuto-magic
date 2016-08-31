class Controller {

    constructor(todoService) {

    }

    onTodoChange(){
      this.onUpdate({data: this.data})
    }
    onTodoDelete(){
      this.onDelete({id: this.data.id})
    }

}

export default {
    selector: 'todo',
    bindings:{
      data: '<',
      'onUpdate': '&',
      'onDelete': '&'
    },
    template: require('./template.html'),
    controllerAs: 'vm',
    controller: Controller
}
