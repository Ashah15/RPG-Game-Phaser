import Spawner from '../src/game_manager/Spawner';
import ChestModel from '../src/game_manager/ChestModel';

describe('Spawner', () => {
  const arr = [];
  const config = {
    spawnInterval: 0,
    limit: 5,
    spawnerType: 'CHEST',
    id: 'spawn-135',
  };
  function mockAddObject(x, y) {
    arr.push(y);
  }

  function mockDeleteObject(x) {
    arr.splice(x, 1);
  }

  function mockMoveObject() {
    return ('object moved');
  }

  const spawner = new Spawner(config, [[80, 150], [150, 250], [300, 400]], mockAddObject,
    mockDeleteObject, mockMoveObject);

  it('expect  spawn id to be spawn-135', () => {
    expect(spawner.id).toStrictEqual('spawn-135');
  });

  it('expect CHEST to be spawn object type', () => {
    expect(spawner.objectType).toStrictEqual('CHEST');
  });

  it('expect right spawn limit', () => {
    expect(spawner.limit).toBe(5);
  });

  it('expect if SpawnType is CHEST, spawnObject to call spawnChest', () => {
    spawner.spawnObject();
    expect(spawner.objectsCreated.length).toBe(1);
    expect(arr.length).toBe(1);
  });

  it('expect if SpawnType is MONSTER, spawnObject to call spawnMonster', () => {
    config.spawnerType = 'MONSTER';
    spawner.spawnObject();
    expect(spawner.objectsCreated.length).toBe(2);
    expect(arr.length).toBe(2);
  });

  it('expect spawnChest to create a new chest object', () => {
    spawner.spawnChest();
    expect(arr[2] instanceof ChestModel).toBe(true);
  });
});