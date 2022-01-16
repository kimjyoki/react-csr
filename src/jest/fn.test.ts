import fn from './fn';

describe('비동기 관련 로직 테스트', () => {
  test('Promise', () => {
    return fn
      .getName()
      .then(name => {
        expect(name).toBe('Jane');
      })
      .catch(err => {
        throw new Error(err);
      });
  });

  test('Async Await', async () => {
    const name = await fn.getName();
    expect(name).toBe('Jane');
  });
});

// beforeEach(() => {});
// afterEach(() => {});

// 비슷한 로직을 추가적으로 확인할 때
// .skip
// .only
