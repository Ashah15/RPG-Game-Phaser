export default class Map {
  constructor(scene, key, tileSetName, bgLayerName, blockedLayerName) {
    this.scene = scene;
    this.key = key;
    this.tileSetName = tileSetName;
    this.bgLayerName = bgLayerName;
    this.blockedLayerName = blockedLayerName;

    this.createMap();
  }

  createMap() {
    this.map = this.scene.make.tilemap({ key: 'map' });
    this.tiles = this.map.addTilesetImage('background', 'background', 32, 32, 1, 2);

    this.backgroundLayer = this.map.createStaticLayer('background', this.tiles, 0, 0);
    this.backgroundLayer.setScale(2);

    this.blockedLayer = this.map.createStaticLayer('blocked', this.tiles, 0, 0);
    this.blockedLayer.setScale(2);
    this.blockedLayer.setCollisionByExclusion([-1]);

    this.scene.physics.world.bounds.width = this.map.widthInPixels * 2;
    this.scene.physics.world.bounds.height = this.map.heightInPixels * 2;

    this.scene.cameras.main.setBounds(0, 0, this.map.widthInPixels * 2,
      this.map.heightInPixels * 2);
  }
}