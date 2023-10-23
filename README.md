# battleship
Battleship!

In this project I am going to create the game of battleship! I am going to accomplish this using tdd as this is a new concept for me. My goals for this project is that I write down the different tests that I want to pass for each of my different functions/game-logic and then write the code to get them to pass. Ideally every function should NOT be tightly coupled!!

Alright... So it is at this point where I realize I have made a fundamental error in setting up my game.. The tdd was going great to be honest, but I set mine up where the ship class will initialize 2 separate sets of ships for each player rather than have the gameboard store the ship hits and I could've just made a player1/player2 gameboard and had them attack each other. I realize this is going to be a much more of a pain as now I have 12 different moving parts('ships') floating around here rather than 2 but for me to go back and reset all this would be tragic so I'm gonna try and make this much more difficult version where the players have their own ships but communicate with the same gameboard. 

Finished the project. I learned a lot from making this one, especially about classes and objects and how to call to their prototype functions and use 'this' effectively. I was kind of over it by the time I got to the css portion unfortunately so it doesn't look the best!