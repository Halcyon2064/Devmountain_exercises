const item ={
    property1: 10,
    property2: 'great',
    property3: ["it's", "great"]
}
//looping over

for(let property in item){
    console.log(`item is ${property} and ${item[property]}`)
}

//this is how you access property
console.log(item['property1'])

console.log(item.property1)