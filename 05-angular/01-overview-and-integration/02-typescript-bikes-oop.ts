class Bike {
    brand: string
    price: number
    maxSpeed: number
    miles: number
 
    constructor(price: number, maxSpeed: number) {
       this.price = price
       this.maxSpeed = maxSpeed
       this.miles = 0
    }
 
    displayInfo() {
       console.log(`Cost: ${this.price}. Max Speed: ${this.maxSpeed} Total Miles ${this.miles} `)
       return this
 
    }
   ride(){
       this.miles += 10
       console.log("Riding Forward...!")
       return this
   }
   reverse(){
      this.miles -= 5
      if (this.miles < 0) {
         this.miles = 0 
       }
     console.log("Going in Reverse...!")
     return this
   }
 
 };
 
 const Mongoose = new Bike(133.12, 20)
 Mongoose.ride().ride().ride().reverse().displayInfo()
 const Felt = new Bike(34.89, 15)
 Felt.ride().ride().reverse().reverse().displayInfo()
 const Cannondale = new Bike(78.79, 10)
 Cannondale.reverse().reverse().reverse().displayInfo()
 