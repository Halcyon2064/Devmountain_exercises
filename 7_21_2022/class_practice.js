// Create a Ninja class  
// add an attribute: name  
// add an attribute: health - give a default value of 100 
// add a attribute: speed - give a default value of 3  
// add a attribute: strength - give a default value of 3  
// add a method: sayName() - This should log that Ninja's name to the console  
// add a method: showStats() - This should show the Ninja's name, strength, speed, and health.  
// add a method: drinkSake() - This should add +10 Health to the Ninja

class Ninja {
    constructor(name, health=100, speed =3, strength=3){
        this.name=name,
        this.health=health,
        this.speed=speed, 
        this.strength=strength
    }

    sayName(){
        console.log(`My name is ${this.name}`)
    }
    showStats(){
        console.log(`name is ${this.name} \nhealth is ${this.health} \nspeed is ${this.speed} \nstrength is ${this.strength}`)
    }
    drinkSake(){
        this.health += 10
    }

}


// example output
const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
// -> "Ninja Hyabusa has joined the dojo"
ninja1.showStats();
// -> Ninja Hyabusa stats:\nHealth: 100\nSpeed: 3\nStrength: 3


// might be on assessment idk
// create a class Sensei that inherits from the Ninja class
// add an attribute: wisdom - default to 10
// create a method: speakWisdom()
// copy the superSensei using spread

class Sensei extends Ninja{
    constructor(name, health, speed, strength, wisdom=10){
        super(name, health, speed, strength)

        this.wisdom=wisdom
    }
    speakWisdom(){
        console.log('What one programmer can do in one month, two programmers can do in two months.')
    }
    attack(faker){
       if(faker instanceof Ninja){
       faker.health -= 3
       }
      
     
        
    }

}


// example output
const super_sensei = new Sensei("Master Splinter");
const poser_sensei = new Sensei("Master sprinter");
let new_sensei = {...super_sensei}
super_sensei.speakWisdom();
// // -> "What one programmer can do in one month, two programmers can do in two months."
super_sensei.showStats();
// super_sensei.attack(poser_sensei)
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"

// BONUS 
// create an attack function on the sensei class...EXTRA BONUS check if the object attacking is a type of ninja