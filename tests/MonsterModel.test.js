import MonsterModel from '../src/game_manager/MonsterModel';

describe('MonsterModel', () => {
  const monsterModel = new MonsterModel(200, 100, 'gold', 3, 4, 10, 3);
  it('expect monster health to be 10', () => {
    expect(monsterModel.health).toBe(10);
  });

  it('expect monster health to be 9 after calling loseHealth', () => {
    monsterModel.loseHealth();
    expect(monsterModel.health).toBe(9);
  });

  it('expect to generate a random id', () => {
    expect(/^3-/.test(monsterModel.id)).toBe(true);
  });
});