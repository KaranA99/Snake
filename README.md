<h2> Snake Game </h2>

Coded in Javascript using HTML/CSS using canvas. Game is started when index.html is ran and use the arrow keys to move the snake around. The objective of the game is to eat all the pieces without touching the borders or hitting yourself. Everytime you eat a food, your snake gets bigger. 3 Javascript files were used to construct the game. The main javascript file containing the game design is coded in display.js. The snake attritbutes and functions is coded in snake.js. The pieces (food) for the snake is coded in pieces.js. 

Display.js - 
  Declares all constant variables to be used throughout the project
  Refreshes the game every half a second to detect change such as the snake moving or snake eating food
  Detects when an arrow key is pressed, snake moves according to the arrowkey pressed
  
Snake.js - 
  Declares all properties of the snake such as position and has a tail function to keep track of the food eaten
  Has function to consistently update the snake visuals every half a second to properly play the game
  Has another function to detect collision with the border/itself. Ends game when any of these conditions are met.
  Detects when food is eaten and makes the tail longer everytime food is eaten

Pieces.js - 
  Function to randomize the location of the food based on the width/height of the game.
  Each food has a title based on a course title. When all 45 food is eaten, user wins game.

Index.html - 
  Declares canvas element
  Ties all javascript scripts together to correctly run game
  
<h2> Pictures </h2>

<h4> Starting the Game </h4>
https://user-images.githubusercontent.com/56744953/95142157-0dc1b780-0741-11eb-9c0b-125b30622224.png

<h4> How the Snake looks after eating food </h4>
https://user-images.githubusercontent.com/56744953/95142393-99d3df00-0741-11eb-94c0-87b2a649a7ce.png

<h4> Game Over Alert </h4>


