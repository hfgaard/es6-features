class Animal {
  constructor(type, attack, speed) {
    this.type = type;
    this.attack = attack;
    this.speed = speed;
    this.health = 40;
  }
}

class Bear extends Animal {
  constructor() {
    super('bear', 9, 1);
  }
}

class Wolf extends Animal {
  constructor() {
    super('wolf', 6, 2);
  }
}

class Rabbit extends Animal {
  constructor() {
    super('rabbit', 3, 5);
  }
}

class Player {
  constructor(choice, name='user') {
    this.choice = choice;
    this.name = name;
  }
}

class User extends Player {
  constructor() {
    let choice = process.argv[2];
    if (choice === 'bear') {
      choice = new Bear();
    } else if (choice === 'wolf') {
      choice = new Wolf();
    } else {
      choice = new Rabbit();
    } 
    super(choice, process.argv[3]);
  }
}

class Computer extends Player {
  constructor() {
    let choice = Math.floor(Math.random() * 3 + 1);
    if (choice === 1) {
      choice = new Bear();
    } else if (choice === 2) {
      choice = new Wolf();
    } else {
      choice = new Rabbit();
    }
    super(choice, 'computer');
  }
}

let attack = (user, comp) => {
  if (user.choice.health === 0) {
    return comp;
  }
  if (comp.choice.health === 0) {
    return user;
  }
  let rand = Math.floor(Math.random() * 2 + 1);
  if (rand === 1) {
    let damage = user.choice.attack * Math.floor(Math.random() * user.choice.speed + 1);
    comp.choice.health = comp.choice.health - damage;
    if (comp.choice.health < 0) {
      comp.choice.health = 0;
    }
    console.log(`You have attacked! Your ${user.choice.type} has attacked the ${comp.choice.type} and has dealt ${damage} damage.
      Your ${user.choice.type}: ${user.choice.health}
      The computer's ${comp.choice.type}: ${comp.choice.health}`);
  } else {
    let damage = comp.choice.attack * Math.floor(Math.random() * comp.choice.speed + 1);
    user.choice.health = user.choice.health - damage;
    if (user.choice.health < 0) {
      user.choice.health = 0;
    }
    console.log(`Oh no! You have been attacked! Your ${comp.choice.type} has attacked the ${user.choice.type} and has dealt ${damage} damage.
      Your ${user.choice.type}: ${user.choice.health}
      The computers' ${comp.choice.type}: ${comp.choice.health}`);
  }
  attack(user, comp);
};

let game = () => {
  let user = new User();
  let comp = new Computer();

  let winner = attack(user, comp);

  let p = new Promise((resolve, reject) => {
    setTimeout((err) => {
      if (err) {
        return reject();
      } else {
        winner = attack(user, comp);
        return resolve(winner);
      }
    }, 1000);
  });

  p.then((data) => {
    if (data === user) {
      console.log(`The winner is ${user.name}! Congratulations!`);
    } else {
      console.log(`The winner is the ${comp.name}. I\'m so sorry, you have lost...`);
    }
  }).catch(() => {
    console.log('Error');
  });
};

game();
