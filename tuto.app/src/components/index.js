import angular from 'angular'
import todoComponent from './todo.component'
import todoListComponent from './todolist.component'
import mainComponent from './main.component'


export default angular.module('components', [])
            .component(todoComponent.selector, todoComponent)
            .component(todoListComponent.selector, todoListComponent)
            .component(mainComponent.selector, mainComponent)
                .name
