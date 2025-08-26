class Player {
  constructor(name, level) {
    this.name = name;
    this.level = level;
  }

info() {
  console.log(`${this.name} has reached Level ${this.level}`);
     }

  }

  levelUp() {
    this.level++;
  }
}

// Exportar como objeto con la clave Player (porque el test usa task4.Player)
module.exports = { Player };
