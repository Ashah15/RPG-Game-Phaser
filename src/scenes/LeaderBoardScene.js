/* eslint-disable import/no-cycle */
import Phaser from 'phaser';
import setScores from '../Objects/api';
import Button from '../Objects/UiButton';
import config from '../Config/config';
import GameScene from './GameScene';

export default class LeaderBoardScene extends Phaser.Scene {
  constructor() {
    super('LeaderBoard');
  }

  create() {
    this.add.text(250, 100, 'Leader Board 🏆', { fontSize: '54px', fill: '#fff' });

    this.retrieveResult();

    this.scene.remove('Game');
    this.scene.add('Game', new GameScene());

    this.menuButton = new Button(this, config.width / 2, config.height / 2 + 250, 'button1', 'button2', 'Menu', this.startScene.bind(this, 'Title'));
    this.playButton = new Button(this, config.width / 2, config.height / 2 + 150, 'button1', 'button2', 'Play', this.startScene.bind(this, 'Game'));
  }

  startScene(targetScene) {
    this.scene.start(targetScene);
  }

  async retrieveResult() {
    const response = await setScores.getResults();
    const scores = response.sort((x, y) => y.score - x.score);
    if (scores.empty) {
      //
    } else {
      this.displayResult(scores);
    }
  }

  displayResult(info) {
    let spaceY = 0;

    for (let i = 0; i <= 5; i += 1) {
      this.add.text(340, 240 + spaceY, `${i + 1}.`, { fontSize: 20 });
      this.add.text(375, 240 + spaceY, `${info[i].user}`, { fontSize: 20 });
      this.add.text(510, 240 + spaceY, `${info[i].score}`, { fontSize: 20 });
      spaceY += 25;
    }
  }
}