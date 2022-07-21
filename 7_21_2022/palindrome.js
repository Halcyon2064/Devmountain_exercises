let palindromemaker3000 = (candidate) =>{
    for(i = 0; i<candidate.length; i++){
        if (candidate[i] !== candidate[(candidate.length-1)-i]){
            return false
        }
    }
    return true
}

console.log(palindromemaker3000('non'))
