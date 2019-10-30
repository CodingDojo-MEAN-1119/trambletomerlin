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
Ninja.prototype.drinkSake = function() {
    this.health += 10;
    return this;
}

var tramble = new Ninja('Tramble');

tramble.sayName();

tramble.showStats();