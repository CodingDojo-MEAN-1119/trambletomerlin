class Ninja {
    constructor(name){
        this.name = name;
        this.health =100;
        this.strength = 3;
        this.speed = 3;
    }
}

Ninja.prototype.sayName = function(Ninja){
    console.log("Hey fellow ninjas, my name is" + " " + this.name );
    return this;
}

Ninja.prototype.dinkSake = function(Ninja){
    this.health += 10;
    return this;
}

Ninja.prototype.showStats = function(Ninja){
    console.log("Name:"+ this.name,"Health:" + this.health, 'Speed:' + this.speed, 'Strength:' + this.stregth );
}

class Sensei extends Ninja{
    constructor(name){
        super(name)
        this.wisdom = 10;
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
    }
}

Ninja.prototype.speakWisdom = function(Ninja){
    console.log ("What one programmer can do in one month, two programmers can do in two months.")
}
  
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
