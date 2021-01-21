/* eslint-disable global-require */
/* eslint-disable no-unused-vars */
import Phaser from 'phaser';
import items from '../../assets/images/items.png';
import characters from '../../assets/images/characters.png';
import goldSound from '../../assets/audio/Pickup.wav';
import monsters from '../../assets/images/monsters.png';

const jsonMap = require('../../assets/level/large_level.json');

export default class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  preload() {
    this.loadImages();
    this.loadSpritesheets();
    this.loadAudio();
    this.loadTileMap();
  }

  loadImages() {
    this.load.image('button1', require('../../assets/images/ui/blue_button01.png').default);
    this.load.image('button2', require('../../assets/images/ui/blue_button02.png').default);
    this.load.image('background', require('../../assets/level/background-extruded.png').default);
  }

  loadSpritesheets() {
    this.load.spritesheet('items', require('../../assets/images/items.png').default, { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet('characters', require('../../assets/images/characters.png').default, { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet('monsters', require('../../assets/images/monsters.png').default, { frameWidth: 32, frameHeight: 32 });
  }

  loadAudio() {
    this.load.audio('goldSound', require('../../assets/audio/Pickup.wav').default);
    this.load.audio('enemyDeath', require('../../assets/audio/EnemyDeath.wav').default);
    this.load.audio('playerAttack', require('../../assets/audio/PlayerAttack.wav').default);
    this.load.audio('playerDamage', require('../../assets/audio/PlayerDamage.wav').default);
    this.load.audio('playerDeath', require('../../assets/audio/PlayerDeath.wav').default);
  }

  loadTileMap() {
    this.load.tilemapTiledJSON('map', jsonMap);
  }

  create() {
    this.scene.start('Preloader');
  }
}