
class ApiError extends Error { //Error is parent 
    constructor( //creating our own constructor and giving exrta parameters
        statusCode,
        message= "Something went wrong",
        errors = [],
        stack = ""
    ){
        super(message) //using parent constructor parameter
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false;
        this.errors = errors

    }
}

export {ApiError}