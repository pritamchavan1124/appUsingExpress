function createResult(err,data){
    const result={status:''}
    if(err){
        result['status']='error'
        result['error']=err
    }else{
        result['status']='success'
        result['data']=data
    }
    return result
}
module.exports={
    createResult: createResult,
}