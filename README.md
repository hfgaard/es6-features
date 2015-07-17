This game runs in the command line. You play against the computer and can select one of 3 animals, a bear, a wolf and a rabbit. 

A bear can deal 9 points of damage, but because of it's slow speed, can only attack once per turn.

A wolf can deal 6 points of damage, but can attack up to twice per turn.

A rabbit can only deal 3 points of damage, but can attack up to 5 times per turn.

The computer randomly picks an animal and when a game begins, the turns are chosen at random. After each attack, the game will print out the user and computer's animals current health. At the end of the game, it will print out the winner.

To run this game in the command line, you can enter:

`babel-node index.js [animal] [name]`

Where animal is `'bear'`, `'wolf'` or `'rabbit'`. If you fail to choose an animal, a rabbit will be selected for you.
The name field is optional.
