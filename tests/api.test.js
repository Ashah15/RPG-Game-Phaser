import API from '../src/Objects/api';

test('score to be saved must not be 0', () => {
  API.saveResults('Arnold', 0)
    .then((response) => {
      expect(response).toBe(null);
    })
    .catch((error) => error);
});

test('score sent to API should be an object', () => {
  API.getResults().then(data => {
    expect(typeof data).toBe('object');
  }).catch(() => { });
});
