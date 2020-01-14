import createCurrency from 'src/fp/currency/create';

const MDL = createCurrency('MDL', {
  code: 'MDL',
  symbol: 'lei',
  thousandsSeparator: ',',
  decimalSeparator: '.',
  decimalDigits: 2,
  pattern: '%ns%v %s',
});

export default MDL;
