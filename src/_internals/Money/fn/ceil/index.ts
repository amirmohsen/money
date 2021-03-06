import { Money } from '../..';
import ROUNDING from '../../../constants/ROUNDING';
import { convertBigNumberToStringInteger } from '../_internals';

/**
 * Return the smallest integer greater than or equal to the current value
 * @returns - new Money instance with the ceiling value
 */
const ceil = (money: Money): Money => {
  const newValue = money.value.decimalPlaces(0, ROUNDING.CEIL as any);
  return new Money(convertBigNumberToStringInteger(money, newValue), money.currency);
};

export default ceil;
