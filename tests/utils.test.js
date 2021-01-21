import { randomNumber } from '../src/game_manager/utils';

describe('Utils', () => {
  it('expect to generate a random number', () => {
    expect(randomNumber(10, 30) >= 10).toBe(true);
  });
});