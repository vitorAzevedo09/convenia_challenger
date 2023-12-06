// Import the Vuex store module
import billModule from '../../src/store/modules/tip.js';

// Destructure the relevant parts from the module
const { state, getters, mutations, actions } = billModule;

// Mock Apollo Client and GraphQL response
jest.mock('../../src/api/vue-apollo.js', () => ({
  query: jest.fn()
}));

describe('Bill Vuex Module', () => {
  let mockCommit;
  let mockState;

  beforeEach(() => {
    // Initialize a mock commit function and mock state
    mockCommit = jest.fn();
    mockState = { ...state() };
  });

  describe('Mutations', () => {
    it('SET_BILL should update the bill in the state', () => {
      mutations.SET_BILL(mockState, 50);
      expect(mockState.bill).toBe(50);
    });

    it('SET_QUOTE_BRL should update the quote_BRL in the state', () => {
      mutations.SET_QUOTE_BRL(mockState, 5);
      expect(mockState.quote_BRL).toBe(5);
    });

    it('SET_CURRENCY should update the currency in the state', () => {
      mutations.SET_CURRENCY(mockState, 'USD');
      expect(mockState.currency).toBe('USD');
    });

    it('SET_TIP_PERCENTAGE should update the tip_percentage in the state', () => {
      mutations.SET_TIP_PERCENTAGE(mockState, 15);
      expect(mockState.tip_percentage).toBe(15);
    });

    it('SET_PEAPLO_QUANTITY should update the quantity_peaplo in the state', () => {
      mutations.SET_PEAPLO_QUANTITY(mockState, 4);
      expect(mockState.quantity_peaplo).toBe(4);
    });
  });

  describe('Getters', () => {
    it('getBill should return the bill from the state', () => {
      const result = getters.getBill(mockState);
      expect(result).toBe(mockState.bill);
    });

    // Add more getter tests for other getters...
  });

  describe('Actions', () => {
    it('getQuoteBRL should commit SET_QUOTE_BRL mutation with the correct value on success', async () => {
      // Mock a successful GraphQL response
      const mockResponse = {
        data: {
          latest: [{ quote: 4 }]
        }
      };

      // Mock Apollo Client query function to return the response
      require('../../src/api/vue-apollo.js').query.mockResolvedValueOnce(mockResponse);

      // Call the action
      await actions.getQuoteBRL({ commit: mockCommit, state: mockState });

      // Check if the SET_QUOTE_BRL mutation was called with the correct value
      expect(mockCommit).toHaveBeenCalledWith('SET_QUOTE_BRL', 4);
    });

    // Add more action tests for other actions...
  });
});

