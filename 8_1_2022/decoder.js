
function decode (thingy){
    let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ]
    let amount = parseInt(thingy[0], 10)
    let neww = ''
    for (let i=1; i<thingy.length; i++){
        let other = letters.indexOf(thingy[i])
        if ((other+amount)>25){
            neww += letters[(other+amount)-letters.length]
        }
        else {
            neww += letters[other+amount]}
        
    }

    console.log(neww)








}   

decode('5abcdzzzyyy')