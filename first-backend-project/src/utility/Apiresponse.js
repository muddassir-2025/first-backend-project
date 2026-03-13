
class ApiResponse {
    constructor(statusCode, data, message = "Success"){
        this.statusCode = statusCode
        this.data = data
        this.message = message
        this.success = statusCode < 400
    }
} 

export { ApiResponse }  //status code is https codes : not neccesary can send any but best practise ...
