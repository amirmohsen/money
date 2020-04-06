import createCurrency from 'src/fp/currency/createCurrency';

const KRW = createCurrency('KRW', {
  code: 'KRW',
  symbol: '₩',
  thousandsSeparator: ',',
  decimalSeparator: '.',
  decimalDigits: 0,
  pattern: '%ns%s%v',
});

export default KRW;
