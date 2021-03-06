# RPG-Game-Phaser

>A RPG game built with the phaser3 library.

![titans](https://user-images.githubusercontent.com/25789605/105510383-a0ca3180-5cdf-11eb-902e-de57ef5223e9.png)

## About the Game Design and Development Structure
- The main objective of this project was to build a platform game. I got inspiration from Zenva Academy Tutorial to implement the game design, different scenes and scoring system.
- Design game background using tilesmap editor. Blocked layers(areas in the background we don't want the players to collide with) and game objects such as the players, treasure box and monsters were added while designing on the map editor and the background image was exported in a json file.
- Aquired the initial game template setup from Zenva Academy where I then modified it to add extra features to enhance the game.
- The game logic is made up of the following:
  - The warrior who is the player of the game spawn at different locations of the gamescene at the start of a new game.
  - There are blocked layers more like obstacles so the player does not move freely in the tilemap or background just to increase the complexity.
  - The monsters and the treasure box spawn at different locations of the gamescene, just like the player does.
  - The player must collect the treasure box to get more gold.
  - The warrior get more health bar and gold by fighting the monsters with his sword. The sword can be gotten by pressing the spacebar of your keyboard.
  - The player must be quick to fight the monsters so that he doesn't lose his/her health.
  - The game is over when the player's health is at zero.
- The leaderboard API is implemented to display players with highest scores.

## How to play titans
- After the loading scene, a scene appears with the buttons. You can click on options to disable sound and music. To get started click on play.
- The player gets more health and gold by fighting the monsters with his sword. The sword can be gotten by pressing the space bar key on your keyboard.
- Use the left arrow key on the keyboard to move the player movement to the left of the game scene.
- Use the right arrow key on the keyboard to move the player movement to the right of the game scene.
- Use the down arrow key on the keyboard to move the player movement to down of the game scene.
- Use the spacebar key on the keyboard to fight the monsters with your weapon which is a sword.
- The warrior must be quick to fight the monsters so that he doesn't lose his healthbar.
- The game is over if the player's health is at zero.
- If the game over it takes you to screen where you can add your scores to the leaderboard click on the button submit to add your name to the     leaderboard.


## Built With

- HTML & CSS,
- Javascript,
- ES6,
- Jest,
- Babel,
- Webpack,
- Phaser3

## Live Demo

[Live Link](https://uryelah.github.io/RPG-Game-Phaser/)


## Getting Started

How to install and run it locally

- Run git clone https://github.com/Ashah15/RPG-Game-Phaser.git to get it in your local machine.

- Navigate to the folder by running

  cd RPG-Game-Phaser
  
- Install all of the dependencies by running
  
  npm install
  
- Bundle the files and start the development server

  npm run start
  
- The game is now running on the browser

  http://localhost:8080/
  
- For testing run 
 
  npm test




## Authors

👤 **Asha Abdullahi**

-  [Github](https://github.com/Ashah15)
-  [Twitter](https://twitter.com/AshaAbdullahi13)
-  [Linkedin](https://www.linkedin.com/in/ashaabdullahi/)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check the [issues page](https://github.com/Ashah15/RPG-Game-Phaser/issues).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

- [Phaser 3](https://phaser.io/).
- [Zenva Academy](https://academy.zenva.com/?zva_src=https://gamedevacademy.org) rpg game tutoral.
- [Openweathermap](https://adventurerr.netlify.app/) for image assets

## 📝 License

This project is [MIT](lic.url) licensed.
