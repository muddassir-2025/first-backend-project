//try-catch wrapper

const asyncHandler=(requestHandler)=>{ //storing func in variable
  return (req,res,next)=>{
    Promise.resolve(requestHandler(req,res,next)).
    catch((err)=>next(err))
  }
}

export default asyncHandler