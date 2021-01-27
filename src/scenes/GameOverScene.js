/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-cycle */
import Phaser from 'phaser';
import Button from '../Objects/UiButton';
import setScores from '../Objects/api';
import config from '../Config/config';
import PlayerModel from '../game_manager/PlayerModel';

let result = 0;

export default class GameOverScene extends Phaser.Scene {
  constructor() {
    super('GameOver');
  }

  getGold(value) {
    result = value;
  }

  create() {
    this.add.text(450, 200, `Total Score: ${result}`, { fontSize: 36 }).setOrigin(0.5);

    const mainDiv = document.getElementById('phaser-game');
    const userData = document.createElement('div');
    userData.setAttribute('id', 'user-input');
    const input = document.createElement('input');
    input.setAttribute('id', 'player-name');
    input.setAttribute('placeholder', 'Enter Your Name');
    input.type = 'text';
    input.setAttribute('required', '');
    userData.appendChild(input);

    const submitBtn = document.createElement('button');
    submitBtn.innerHTML = 'Submit';
    submitBtn.setAttribute('class', 'btn btn-secondary submit-button');
    userData.appendChild(submitBtn);

    this.leaderButton = new Button(this, config.width / 2, config.height / 2 + 100, 'button1', 'button2', 'View Scores', this.startScene.bind(this, 'LeaderBoard'));

    mainDiv.appendChild(userData);

    submitBtn.addEventListener('click', () => {
      const name = document.getElementById('player-name').value;
      document.getElementById('player-name').remove();
      document.querySelector('.submit-button').remove();
      setScores.saveResults(name, result);
    });
  }

  startScene(targetScene) {
    this.scene.start(targetScene);
  }
}