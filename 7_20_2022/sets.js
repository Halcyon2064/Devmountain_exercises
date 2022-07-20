let isitunique = (word) =>{
    let set1 = new Set()
    for (let i = 0; i<word.length ; i++){
        set1.add(word[i])
    }
    if (set1.size === word.length){
        
        console.log(true)
    }else if (set1.size !== word.length){
        console.log(false)
    }
}


isitunique('johan')

//make a set 
const set1 = new Set();
//sets are arrays that can have a value only once. (can only have unique characters)