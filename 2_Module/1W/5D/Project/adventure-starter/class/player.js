// const { Item } = require("./item")
// const { Room } = require("./room")

class Player {

    constructor(name, startingRoom) {
        this.name = name;
        this.currentRoom = startingRoom;
        this.items = [];
    }

    move(direction) {

        const nextRoom = this.currentRoom.getRoomInDirection(direction);

        // If the next room is valid, set the player to be in that room
        if (nextRoom) {
            this.currentRoom = nextRoom;

            nextRoom.printRoom(this);
        } else {
            console.log("You cannot move in that direction");
        }
    }

    printInventory() {
        if (this.items.length === 0) {
            console.log(`${this.name} is not carrying anything.`);
        } else {
            console.log(`${this.name} is carrying:`);
            for (let i = 0 ; i < this.items.length ; i++) {
                console.log(`  ${this.items[i].name}`);
            }
        }
    }

    //Picks up an item from a room into the player's inventory
    takeItem(itemName) {

        for(let item of this.currentRoom.items)
        {
            if(itemName === item.name)
            {
                let index = this.currentRoom.items.indexOf(item)
                this.currentRoom.items.splice(index, 1);
                return this.items.push(item);
            }
        }


    }

    //Drops an item the player is holding into their current room
    dropItem(itemName) {

        for(let item of this.items)
        {
            if(itemName === item.name)
            {
                let index = this.items.indexOf(item)
                this.items.splice(index, 1);
                return this.currentRoom.items.push(item);
            }
        }
    }

    eatItem(itemName) {
        // Fill this in

    }

    //Retrieves an item from a player's inventory by name
    getItemByName(name) {
        for(let item of this.items)
        {
            if(name === item.name)
            {
                return item;
            }
        }
    }
}

// let item1 = new Item("rock", "just a simple rock");
// let item2 = new Item("bread", "just a simple bread");
// let room = new Room("Test Room", "A test room");
// let player = new Player("player", room);
// room.items.push(item1);
// room.items.push(item2);
// // player.takeItem("rock");

// // player.getItemByName("rock");

// // console.log(player);
// // console.log(room);
// // console.log(room.items);
// // console.log(player.currentRoom);
// console.log(player.currentRoom.items)
// console.log(player.items)

// player.takeItem("rock");

// // console.log(room.items);
// console.log(player.currentRoom.items)
// console.log(player.items)

module.exports = {
  Player,
};
