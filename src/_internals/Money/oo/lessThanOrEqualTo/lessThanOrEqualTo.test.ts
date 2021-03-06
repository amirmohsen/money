describe('lessThanOrEqualTo (oo)', () => {
  const doMock = (): void => {
    class MockMoney {}
    const mockAction = jest.fn(() => 'return value');

    jest.resetModules();

    jest.doMock('../../../Money', () => ({
      __esModule: true,
      Money: MockMoney,
      default: MockMoney,
    }));

    jest.doMock('../../fn/lessThanOrEqualTo', () => ({
      __esModule: true,
      default: mockAction,
    }));
  };

  const dontMock = (): void => {
    jest.dontMock('../../../Money');
    jest.dontMock('../../fn/lessThanOrEqualTo');
  };

  beforeEach(doMock);

  afterEach(dontMock);

  test('should add lessThanOrEqualTo to the Money prototype', async () => {
    const { Money } = await import('../..');

    expect(Money.prototype.lessThanOrEqualTo).toBeUndefined();

    await import('.');

    expect(typeof Money.prototype.lessThanOrEqualTo).toBe('function');
  });

  test('should call the fn version', async () => {
    const { Money } = await import('../..');
    await import('.');

    const { default: lessThanOrEqualTo } = await import('../../fn/lessThanOrEqualTo');

    const money = new Money('15.60', 'USD');
    const returnVal = money.lessThanOrEqualTo('56.20');

    expect(returnVal).toBe('return value');
    expect(lessThanOrEqualTo).toHaveBeenCalledTimes(1);
    expect(lessThanOrEqualTo).toHaveBeenCalledWith(money, '56.20');
  });
});
