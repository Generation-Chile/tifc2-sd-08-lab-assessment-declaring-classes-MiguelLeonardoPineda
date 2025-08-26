// Clase Player con name y level
class Player {
  constructor(name, level) {
    this.name = name;
    this.level = level;
  }

  info() {
    console.log(`${this.name} has reached Level ${this.level}`);
  }

  levelUp() {
    this.level++;
  }
}

// Exportar como objeto con la clave Player
module.exports = { Player };
