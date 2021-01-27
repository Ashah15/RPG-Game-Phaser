import Phaser from 'phaser';
import GameScene from './scenes/GameScene';
import BootScene from './scenes/BootScene';
import TitleScene from './scenes/TitleScene';
import UiScene from './scenes/UiScene';
import GameOverScene from './scenes/GameOverScene';
import PreloaderScene from './scenes/PreloaderScene';
import LeaderBoardScene from './scenes/LeaderBoardScene';
import InstructionScene from './scenes/InstructionScene';
import config from './Config/config';

class Game extends Phaser.Game {
  constructor() {
    super(config);
    this.scene.add('Boot', BootScene);
    this.scene.add('Preloader', PreloaderScene);
    this.scene.add('Title', TitleScene);
    this.scene.add('Game', GameScene);
    this.scene.add('Instruction', InstructionScene);
    this.scene.add('LeaderBoard', LeaderBoardScene);
    this.scene.add('Ui', UiScene);
    this.scene.add('GameOver', GameOverScene);
    this.scene.start('Boot');
  }
}

window.game = new Game();
