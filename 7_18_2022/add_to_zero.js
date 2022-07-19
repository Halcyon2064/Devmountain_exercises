let ar1 = [0, 1, 2, 3, -2, 5]
let e = false

for(i = 0; i<ar1.length; i++){
    for(a = 0; a<ar1.length; a++){
        if((ar1[i]+ar1[a])===0 && i!=a){
            e = true
            
            
        }
        }
    }

console.log(e)