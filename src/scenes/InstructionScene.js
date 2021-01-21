import Phaser from 'phaser';
import Button from '../Objects/UiButton';


export default class InstructionScene extends Phaser.Scene {
  constructor() {
    super('Instruction');
  }

  create() {
    this.text = this.add.text(200, 40, 'How to play😎', { fontSize: 40 });

    this.leftText = this.add.text(200, 100, 'Move the player to the left ⬅️', { fontSize: 24 });

    this.rightText = this.add.text(200, 160, 'Move the player to the right ➡️', { fontSize: 24 });

    this.upText = this.add.text(200, 220, 'Move the player up ⬆️', { fontSize: 24 });

    this.downText = this.add.text(200, 280, 'Move the player down ⬇️', { fontSize: 24 });

    this.playButton = new Button(this, 400, 400, 'button1', 'button2', 'Play', this.startScene.bind(this, 'Game'));
    this.menuButton = new Button(this, 400, 500, 'button1', 'button2', 'Menu', this.startScene.bind(this, 'Title'));
  }

  startScene(targetScene) {
    this.scene.start(targetScene);
  }
}