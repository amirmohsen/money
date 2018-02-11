import {Money, CurrencyMismatchError, WrongMoneyInputError} from '../lib/wealth.esm';

describe('The "Money" class: ', () => {
	test('$10.38 + $8404.97 = $8415.35', () => {
		let
			moneyA = new Money('1038', 'USD'),
			moneyB = new Money('840497', 'USD');

		expect(moneyA.add(moneyB).toString()).toBe('841535');
	});

	test('$840.00 - $78.62 = $761.38', () => {
		let
			moneyA = new Money('84000', 'USD'),
			moneyB = new Money('7862', 'USD');

		expect(moneyA.subtract(moneyB).toString()).toBe('76138');
	});

	test('$0.05 * 4.05 = $0.20', () => {
		let	moneyA = new Money('5', 'USD');

		expect(moneyA.multiply('4.05').toString()).toBe('20');
	});

	test('$1096.37 / 80.47 = $13.62', () => {
		let moneyA = new Money('109637', 'USD');

		expect(moneyA.divide('80.47').toString()).toBe('1362');
	});

	test('OMR10.381 + OMR8404.977 = OMR8415.358', () => {
		let
			moneyA = new Money('10381', 'OMR'),
			moneyB = new Money('8404977', 'OMR');

		expect(moneyA.add(moneyB).toString()).toBe('8415358');
	});

	test('OMR840.001 - OMR78.672 = OMR761.329', () => {
		let
			moneyA = new Money('840001', 'OMR'),
			moneyB = new Money('78672', 'OMR');

		expect(moneyA.subtract(moneyB).toString()).toBe('761329');
	});

	test('OMR1.705 * 4.05 = OMR6.905', () => {
		let	moneyA = new Money('1705', 'OMR');

		expect(moneyA.multiply('4.05').toString()).toBe('6905');
	});

	test('OMR1096.347 / 80 = OMR13.704', () => {
		let moneyA = new Money('1096347', 'OMR');

		expect(moneyA.divide('80').toString()).toBe('13704');
	});

	test('¥10 + ¥8404 = ¥8414', () => {
		let
			moneyA = new Money('10', 'JPY'),
			moneyB = new Money('8404', 'JPY');

		expect(moneyA.add(moneyB).toString()).toBe('8414');
	});

	test('¥840 - ¥78 = ¥762', () => {
		let
			moneyA = new Money('840', 'JPY'),
			moneyB = new Money('78', 'JPY');

		expect(moneyA.subtract(moneyB).toString()).toBe('762');
	});

	test('¥13 * 4 = ¥52', () => {
		let	moneyA = new Money('13', 'JPY');

		expect(moneyA.multiply('4').toString()).toBe('52');
	});

	test('¥1096 / 80 = ¥14', () => {
		let moneyA = new Money('1096', 'JPY');

		expect(moneyA.divide('80').toString()).toBe('14');
	});

	test('new Money(1.15, "GBP") must throw a WrongMoneyInputError.', () => {
		expect(() => new Money(1.15, 'GBP')).toThrow(WrongMoneyInputError);
	});

	test('new Money("invalid", "USD") must throw a WrongMoneyInputError.', () => {
		expect(() => new Money('invalid', 'USD')).toThrow(WrongMoneyInputError);
	});

	test('(new Money("10000", "USD")).equals(new Money(10000, "USD"))', () => {
		let
			moneyA = new Money('10000', 'USD'),
			moneyB = new Money(10000, 'USD');

		expect(moneyA.equals(moneyB)).toBe(true);
	});

	test('(new Money("100.00", "USD")).equals(new Money(10000, "USD"))', () => {
		let
			moneyA = new Money('100.00', 'USD'),
			moneyB = new Money(10000, 'USD');

		expect(moneyA.equals(moneyB)).toBe(true);
	});

	test('$0.10 != $0.11', () => {
		let
			moneyA = new Money('10', 'USD'),
			moneyB = new Money(11, 'USD');

		expect(moneyA.equals(moneyB)).toBe(false);
	});

	test('$1.00 > $0.10', () => {
		let
			moneyA = new Money('100', 'USD'),
			moneyB = new Money('10', 'USD');

		expect(moneyA.greaterThan(moneyB)).toBe(true);
	});

	test('$1.00 >= $0.10', () => {
		let
			moneyA = new Money('100', 'USD'),
			moneyB = new Money('10', 'USD');

		expect(moneyA.greaterThanOrEqualTo(moneyB)).toBe(true);
	});

	test('$1.00 >= $1.00', () => {
		let
			moneyA = new Money('100', 'USD'),
			moneyB = new Money('100', 'USD');

		expect(moneyA.greaterThanOrEqualTo(moneyB)).toBe(true);
	});

	test('$0.10 < $1.00', () => {
		let
			moneyA = new Money('10', 'USD'),
			moneyB = new Money('100', 'USD');

		expect(moneyA.lessThan(moneyB)).toBe(true);
	});

	test('$0.10 <= $1.00', () => {
		let
			moneyA = new Money('10', 'USD'),
			moneyB = new Money('100', 'USD');

		expect(moneyA.lessThanOrEqualTo(moneyB)).toBe(true);
	});

	test('$1.00 <= $1.00', () => {
		let
			moneyA = new Money('100', 'USD'),
			moneyB = new Money('100', 'USD');

		expect(moneyA.lessThanOrEqualTo(moneyB)).toBe(true);
	});

	test('abs(-$1.00) == $1.00', () => {
		let
			moneyA = new Money('-100', 'USD'),
			moneyB = new Money('100', 'USD');

		expect(moneyA.absolute().equals(moneyB)).toBe(true);
	});

	test('floor($1.18) == $1.00', () => {
		let
			moneyA = new Money('118', 'USD'),
			moneyB = new Money('100', 'USD');

		expect(moneyA.floor().equals(moneyB)).toBe(true);
	});

	test('ceil($1.18) == $2.00', () => {
		let
			moneyA = new Money('118', 'USD'),
			moneyB = new Money('200', 'USD');

		expect(moneyA.ceil().equals(moneyB)).toBe(true);
	});

	test('"£1.00 == $1.00" must throw a "CurrencyMismatchError"', () => {
		let
			moneyA = new Money('100', 'GBP'),
			moneyB = new Money('100', 'USD');

		expect(() => moneyA.equals(moneyB)).toThrow(CurrencyMismatchError);
	});

	test('$10.38 + £8404.97 must throw a "CurrencyMismatchError"', () => {
		let
			moneyA = new Money('1038', 'USD'),
			moneyB = new Money('840497', 'GBP');

		expect(() => moneyA.add(moneyB)).toThrow(CurrencyMismatchError);
	});

	test('"$89.67".allocate([70, 24, 6]) === ["$62.77", "$21.52", "$5.38"]', () => {
		let money = new Money('8967', 'USD');

		expect(money.allocate([70, 24, 6]).map(allocation => allocation.toString())).toEqual(['6277', '2152', '538']);
	});

	test('"$483.41".allocateTo(3) === ["$161.14", "$161.14", "$161.13"]', () => {
		let money = new Money('48341', 'USD');

		expect(money.allocateTo(3).map(allocation => allocation.toString())).toEqual(['16114', '16114', '16113']);
	});

	test('(new Money(1038)).hasSameCurrency(new Money(840497)) === true', () => {
		let
			moneyA = new Money('1038', 'USD'),
			moneyB = new Money('840497', 'USD');

		expect(moneyA.hasSameCurrency(moneyB)).toBe(true);
	});

	test('new Money(5442, "USD").format() == "$54.42"', () => {
		let	moneyA = new Money('5442', 'USD');
		expect(moneyA.format()).toBe('$54.42');
	});

	test('new Money(-45497, "USD").format() == "-$454.97"', () => {
		let	moneyA = new Money('-45497', 'USD');
		expect(moneyA.format()).toBe('-$454.97');
	});

	test('new Money(120014515442, "USD").format() == "$1,200,145,154.42"', () => {
		let	moneyA = new Money('120014515442', 'USD');
		expect(moneyA.format()).toBe('$1,200,145,154.42');
	});

	test('new Money(45497, "USD").format() == "£454.97"', () => {
		let	moneyA = new Money('45497', 'GBP');
		expect(moneyA.format()).toBe('£454.97');
	});

	test('new Money(45497, "EUR").format() == "454,97 €"', () => {
		let	moneyA = new Money('45497', 'EUR');
		expect(moneyA.format()).toBe('454,97 €');
	});

	test('new Money(120014515442, "EUR").format() == "1 200 145 154,42 €"', () => {
		let	moneyA = new Money('120014515442', 'EUR');
		expect(moneyA.format()).toBe('1 200 145 154,42 €');
	});

	test('Money.parse($54.42).getAmount() == "5442"', () => {
		expect(Money.parse('$54.42', 'USD').getAmount()).toBe('5442');
	});

	test('Money.parse(-$454.97).getAmount() == "-45497"', () => {
		expect(Money.parse('-$454.97', 'USD').getAmount()).toBe('-45497');
	});

	test('Money.parse($1,200,145,154.42).getAmount() == "120014515442"', () => {
		expect(Money.parse('$1,200,145,154.42', 'USD').getAmount()).toBe('120014515442');
	});

	test('Money.parse(£454.97).getAmount() == "45497"', () => {
		expect(Money.parse('£454.97', 'GBP').getAmount()).toBe('45497');
	});

	test('Money.parse(454,97 €).getAmount() == "45497"', () => {
		expect(Money.parse('454,97 €', 'EUR').getAmount()).toBe('45497');
	});

	test('Money.parse(1 200 145 154,42 €).getAmount() == "120014515442"', () => {
		expect(Money.parse('1 200 145 154,42 €', 'EUR').getAmount()).toBe('120014515442');
	});
});
