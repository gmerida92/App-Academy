//At least 5 properties and 2 methods

class Dog {
  constructor(name, breed, weight, health, favToy, gender) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
    this.health = health;
    this.favToy = favToy;
    this.gender = gender;
    this.wags= 0;
    this.hungry = 100;
    this.isClean = true;


  }

  wagTail() {
      console.log(`${this.name} is wagging their tail`);
      wags++;
  }

  fetchBall() {
    console.log(`${this.name} fetched ball.`)
  }

  countWags() {
      return this.wags;
  }

  giveBath() {
      if(this.clean = false){
      console.log(`${this.name} is clean`)
      this.isClean = true;
    }
  }

  goForWalk() {
    console.log(`${this.name} went for a walk`)
    this.hungry--;
  }

  feed () {
      this.hungry++;
  }

  speak() {
    console.log("WOOF WOOF!")
  }

  sniff() {
    console.log("Sniff Sniff")
  }

}
