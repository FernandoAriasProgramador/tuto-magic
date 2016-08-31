export default class ApiService {

  constructor($http, $q){

      this.baseUrl = 'http://localhost:19724/api/'
      this.http = $http
      this.q = $q
  }

  get(url, params){

    let q = this.q.defer()
    this.http.get(this.baseUrl + url, {params})
      .then( (data) => {
        q.resolve(data)
      }, (err) => {
        q.reject(err)
      })

    return q.promise
  }

  post(url, data){

    let q = this.q.defer()
    this.http.post(this.baseUrl + url, data)
      .then( (data) => {
        q.resolve(data)
      }, (err) => {
        q.reject(err)
      })

    return q.promise
  }

}
