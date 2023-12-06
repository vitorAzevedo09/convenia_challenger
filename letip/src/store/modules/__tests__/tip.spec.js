import { createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import getters from './path-to-your-getters';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Getters', () => {
  let store;

  beforeEach(() => {
    store = new Vuex.Store({
      state: {
        bill: 100,
        tip_percentage: 10,
        quantity_peaplo: 2,
        currency: 'EUR',
        quote_BRL: 1.5
      },
      getters: getters
    });
  });

  it('getBill should return the correct value', () => {
    expect(store.getters.getBill).toBe(100);
  });

  it('getTipPercentage should return the correct value', () => {
    expect(store.getters.getTipPercentage).toBe(10);
  });

  it('getQuantityPeaplo should return the correct value', () => {
    expect(store.getters.getQuantityPeaplo).toBe(2);
  });

  it('billMoney should return the correct formatted currency', () => {
    const result = store.getters.billMoney;
    expect(result).toBe('€100.00'); // Adjust the expected value based on your currency format
  });

  it('tipMoney should return the correct value', () => {
    expect(store.getters.tipMoney).toBe(10);
  });

  it('tipCurrency should return the correct formatted currency', () => {
    const result = store.getters.tipCurrency;
    expect(result).toBe('€10.00'); // Adjust the expected value based on your currency format
  });

  it('billTotalMoney should return the correct value', () => {
    expect(store.getters.billTotalMoney).toBe(110);
  });

  it('billTotalBRL should return the correct formatted currency', () => {
    const result = store.getters.billTotalBRL;
    expect(result).toBe('BRL 165.00'); // Adjust the expected value based on your currency format
  });

  it('billTotalCurrency should return the correct formatted currency', () => {
    const result = store.getters.billTotalCurrency;
    expect(result).toBe('€110.00'); // Adjust the expected value based on your currency format
  });

  it('billEachPerson should return the correct value', () => {
    expect(store.getters.billEachPerson).toBe(55);
  });

  it('billEachPersonCurrency should return the correct formatted currency', () => {
    const result = store.getters.billEachPersonCurrency;
    expect(result).toBe('€55.00'); // Adjust the expected value based on your currency format
  });
});

