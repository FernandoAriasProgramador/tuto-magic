import angular from 'angular'
import apiService from './api.service'
import todoService from './todo.service'

export default angular.module('services', [])
  .service('apiService', apiService)
  .service('todoService', todoService)
  .name
