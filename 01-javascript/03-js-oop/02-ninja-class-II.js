function Ninja(name){
    this.name = name;
    this.health = 100;
    this.speed = 3;
    this.stregth = 3;
}
Ninja.prototype.sayName = function() {
    console.log("Hey fellow ninjas, my name is" + " " + this.name );
    return this;
};
Ninja.prototype.showStats = function() {
    console.log("Name:"+ this.name,"Health:" + this.health, 'Speed:' + this.speed, 'Strength:' + this.stregth );
};
Ninja.prototype.punch = function() {
    this.health -= 5;
    console.log(ninja.name + " was punched by " + this.name + " and lost 5 Health!");
    return this;

}
Ninja.prototype.drinkSake = function() {
    this.health += 10;
    return this;
}
this.kick = function(ninja) {
    const damage = strength * 5;
    ninja.health -= damage;
    console.log(ninja.name + "was punched by" + this.name + "and lost 5 health!");
    return this;
}

redNinja.punch(blueNinja);
blueNinja.kick(blueNinja);

blueNinja.showStats();
redNinja.showStats();