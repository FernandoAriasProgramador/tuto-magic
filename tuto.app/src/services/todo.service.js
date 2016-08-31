export default class TodoService{


  constructor(apiService){
    this.apiService = apiService
  }


  list(){
    return this.apiService.get('Todo/List')
  }

  add(todo){
    return this.apiService.post('Todo/Add', todo)
  }

  remove(id){
    return this.apiService.get('Todo/Delete', {id})
  }

}
