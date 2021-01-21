
import ChestModel from '../src/game_manager/ChestModel';

describe('ChestModel', () => {
  const chestModel = new ChestModel(300, 400, 'gold', 143);

  it('expect to generate a random id', () => {
    expect(/^143-/.test(chestModel.id)).toBe(true);
  });

  it('expect not to give wrong x cordinate', () => {
    expect(chestModel.x).not.toBe(100);
  });

  it('expect to give correct x cordinate', () => {
    expect(chestModel.x).toBe(300);
  });

  it('expect not to give wrong y cordinate', () => {
    expect(chestModel.y).not.toBe(500);
  });

  it('expect to give right y cordinate', () => {
    expect(chestModel.y).toBe(400);
  });

  it('expect spawnerId to be 143', () => {
    expect(chestModel.spawnerId).toBe(143);
  });
});