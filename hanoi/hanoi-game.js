class HanoiGame {
  constructor(towers = [[3, 2, 1], [], []]) { // 1 = TOP, 3 = BOTTOM (?)
    this.towers = towers;
  }


  isValidMove(startTowerIdx, endTowerIdx) {
    // 0, 1 // 0, 2
    const startTower = this.towers[startTowerIdx];
    const targetTower = this.towers[endTowerIdx];

    // check if startpin has any disks
    if (startTower.length === 0 || startTower === undefined || targetTower === undefined) {
      return false;
    } else if (targetTower.length === 0) {
      return true;
    }
      // checking if the tower exists
      else if (endTowerIdx >= this.towers.length || startTowerIdx < this.towers.length) {
        return false;
    } else {
      const lastDiskStart = startTower[startTower.length-1];
      const lastDiskDestination = targetTower[targetTower.length-1];
      return lastDiskStart < lastDiskDestination;
    }
  }

      // const lastDisk = startPin.length-1; // MIRA lastDisk means top

    move(startTowerIdx, endTowerIdx) { }

    isWon() { }

    // the below methods are complete and do not need to be modclearified
    print() {
      // will print our board nicely to our user
      console.log(JSON.stringify(this.towers));
    }

    promptMove(reader, callback) {
      this.print();
      reader.question("Enter a starting tower: ", start => {
        const startTowerIdx = parseInt(start);
        reader.question("Enter an ending tower: ", end => {
          const endTowerIdx = parseInt(end);
          callback(startTowerIdx, endTowerIdx);
        });
      });
    }

    run(reader, callback) {
      // we will prompt our user to provide a start and stop index using
      // a readline interface
      this.promptMove(reader, (startTowerIdx, endTowerIdx) => {
        // if the move is invalid we tell the user
        if (!this.move(startTowerIdx, endTowerIdx)) {
          console.log("Invalid move!");
        }

        if (!this.isWon()) {
          // Continue to play!
          this.run(reader, callback);
        } else {
          this.print();
          console.log("You win!");
          callback();
        }
      });
    }
  }

module.exports = HanoiGame;
