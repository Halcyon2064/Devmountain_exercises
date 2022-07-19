class Dog {
    constructor(name, color){
        this.name=name;
        this.color=color;
    }
    bark(){
        
        console.log('Arf I am', this.name, 'the dog');
    }
}

let dog1 = new Dog('Alex', 'Magenta')
console.log(dog1.name)
console.log(dog1.color)
dog1.bark()


let bark = 'arf'
console.log(bark+bark)