function Ninja(name){
    this.name = name;
    this.health = 100;
    this.speed = 3;
    this.strength = 3;
}
Ninja.prototype.sayName = function() {
    console.log("Hey fellow ninjas, my name is" + " " + this.name );
    return this;
};
Ninja.prototype.showStats = function() {
    console.log("Name:"+ this.name,"Health:" + this.health, 'Speed:' + this.speed, 'Strength:' + this.stregth );
};
Ninja.prototype.punch = function(ninja) {
    this.health -= 5;
    console.log(ninja.name + " was punched by " + this.name + " and lost 5 Health!");
    return this;

}
Ninja.prototype.drinkSake = function(ninja) {
    this.health += 10;
    return this;
}
Ninja.prototype.kick = function(ninja) {
    const damage = this.strength * 5;
    ninja.health -= damage;
    console.log(ninja.name + "was kicked by" + this.name + "and lost 5 health!");
    return this;
}


const tramble = new Ninja('Tramble');

const blueNinja = new Ninja('Goemon');

const redNinja = new Ninja('Bill Gates');
console.log(this);
redNinja.punch(blueNinja);
blueNinja.kick(blueNinja);

blueNinja.showStats();
redNinja.showStats();