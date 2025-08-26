class Player {
  constructor(name, level) {
    this.name = name;
    this.level = level;
  }

  info() {
    console.log(`${this.name} has reached Level ${this.level}!`);
  }

  levelUp() {
    this.level++;
  }
}

// 👇 Esto es lo que hace que el test encuentre la clase como taskX.Player
module.exports = { Player };
