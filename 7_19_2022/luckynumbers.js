
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }


let arraymaker3000 = (n) =>{
    
    let array = []
    for (let i = 0; i<n; i++){
        let rndint = randomIntFromInterval(0, 11)
        array.push(rndint)


    }  
    for (let i = 0; i<array; i++){
      for (let j = 1; i<array; i++){
        if(array[i] == array[j]){
          array[i] = randomIntFromInterval(0, 11)
          
        }
      }
    }

    console.log(array)
  }

arraymaker3000(6)