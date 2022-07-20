function callbacksample(name, functionn){
    console.log(functionn(name))
}

let yomama = (name)=>{
    return(name + ' yomama')
}

callbacksample('john', yomama)