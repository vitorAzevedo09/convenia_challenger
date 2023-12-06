import formatMoney from '@/helpers/currencyFormat.js';

describe('formatMoney function', () => {
  it('formats USD currency correctly', () => {
    const result = formatMoney('USD', 1234.56);
    expect(result).toBe('$1,234.56');
  });

  it('formats BRL currency correctly', () => {
    const result = formatMoney('BRL', 1234.56);
    expect(result).toBe('R$ 1.234,56'); // Adjust this based on the actual output in your application
  });

  it('formats default currency (GBP) correctly', () => {
    const result = formatMoney('GBP', 1234.56);
    expect(result).toBe('£1,234.56');
  });
});
