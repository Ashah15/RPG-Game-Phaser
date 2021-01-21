/* eslint-disable import/no-cycle */
import Phaser from 'phaser';
import UiButton from '../Objects/UiButton';
import config from '../Config/config';
import GameScene from './GameScene';

export default class TitleScene extends Phaser.Scene {
  constructor() {
    super('Title');
  }

  create() {
    this.scene.remove('Game');
    this.scene.add('Game', new GameScene());

    this.titleText = this.add.text(200, 100, 'Zombie Attack', { fontSize: '54px', fill: '#fff' });

    this.gameButton = new UiButton(this, config.width / 2, config.height / 2 - 100, 'button1', 'button2', 'Play', this.startScene.bind(this, 'Game'));

    this.creditsButton = new UiButton(this, config.width / 2, config.height / 2, 'button1', 'button2', 'Instructions', this.startScene.bind(this, 'Instruction'));

    this.LeaderButton = new UiButton(this, config.width / 2, config.height / 2 + 100, 'button1', 'button2', 'Scores', this.startScene.bind(this, 'LeaderBoard'));
  }

  startScene(targetScene) {
    this.scene.start(targetScene);
  }
}