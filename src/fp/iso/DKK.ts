import createCurrency from 'src/fp/currency/create';

const DKK = createCurrency('DKK', {
  code: 'DKK',
  symbol: 'kr.',
  thousandsSeparator: '',
  decimalSeparator: ',',
  decimalDigits: 2,
  pattern: '%ns%v %s',
});

export default DKK;
