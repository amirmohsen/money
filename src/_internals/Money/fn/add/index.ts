import { Money } from '../..';
import { convertBigNumberToStringInteger } from '../_internals';

/**
 * Performs addition
 * @param value - value to be added to the current value;
 * type same as constructor
 * @returns - new Money instance after addition
 */
const add = (money: Money, value: number | string | Money): Money => {
  const moneyValue = new Money(value, money.currency);
  const newValue = money.value.plus(moneyValue.amountAsBigNumber);
  return new Money(convertBigNumberToStringInteger(money, newValue), money.currency);
};

export default add;
