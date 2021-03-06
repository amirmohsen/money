import { Money } from '../..';
import { USD, GBP, EUR, OMR, JPY } from '../../../constants/ISO_CURRENCIES';
import getData, { CurrencySettingsInternalStore } from '../../../CurrencyStore/internals/getData';
import Currency from '../../../Currency';
import format from '.';

jest.mock('../../../CurrencyStore/internals/getData');

describe('format', () => {
  const currencies = ['USD', 'GBP', 'EUR', 'OMR', 'JPY'];

  const values = ['100.00', '54.42', '-120.99', '1200145154.42'];

  beforeAll(() => {
    (getData as jest.MockedFunction<() => CurrencySettingsInternalStore>).mockReturnValue({
      USD,
      GBP,
      EUR,
      OMR,
      JPY,
    });
  });

  for (const currency of currencies) {
    describe(`with "${currency}"`, () => {
      for (const value of values) {
        test(`should format ${currency} ${value} correctly`, () => {
          const money = new Money(value, currency);
          expect(format(money)).toMatchSnapshot();
        });
      }
    });
  }

  describe('when given a currency as settings', () => {
    test('should merge it with the built-in currency to format', () => {
      const customEUR = new Currency({
        ...EUR,
        thousandsSeparator: ',',
        decimalSeparator: '.',
        decimalDigits: 2,
        pattern: '%ns%s%v',
      });
      const money = new Money('45680.90', 'EUR');
      expect(format(money)).toBe('45 680,90 €');
      expect(format(money, customEUR)).toBe('€45,680.90');
    });
  });

  describe('when given a settings object', () => {
    test('should merge it with the built-in currency to format', () => {
      const money = new Money('-45680.90', 'GBP');
      expect(format(money)).toBe('-£45,680.90');
      expect(
        format(money, {
          pattern: '%c %ns%v',
        }),
      ).toBe('GBP -45,680.90');
    });
  });

  describe('when given a currency code as settings', () => {
    test('should completely override the built-in currency to format', () => {
      const money = new Money('-45680.90', 'GBP');
      expect(format(money)).toBe('-£45,680.90');
      expect(format(money, 'USD')).toBe('-$45,680.90');
    });
  });

  describe('when given a custom formatter', () => {
    const customFormattedValue = 'custom formatting';
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const customFormatter = jest.fn((args: object) => customFormattedValue);
    let formattedValue: string;

    beforeAll(() => {
      const customUSD = new Currency({
        ...USD,
        formatter: (args: object): string => customFormatter(args),
      });
      const money = new Money('80.90', customUSD);
      formattedValue = format(money);
    });

    test('should use its return value for formatting', () => {
      expect(formattedValue).toBe(customFormattedValue);
    });

    test('should call it once with the snapshotted arguments', () => {
      expect(customFormatter).toHaveBeenCalledTimes(1);
      expect(customFormatter.mock.calls[0]).toMatchSnapshot();
    });
  });
});
