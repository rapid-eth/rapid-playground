import { hashCode, getContract } from '../utilities';

/**
 * @summary The function is called by the 'useReducer' functionality, it will process the given smart contracts
 *  and then add them to the initial state of the provider.
 * @param {Array} contracts an array of the contract ABIs to be initialized
 * @param {String} provider The name of the provider name to utilize
 * @returns the initial state including with the initialized contracts(if provided)
 */
export const initialize = (contracts, provider) => initialState => {
  if (!contracts) {
    return initialState;
  }
  let deployed = {};
  contracts.forEach(contract => {
    const [deployedContract, address] = getContract(contract, provider);
    const id = hashCode(deployedContract);
    deployed[contract.contractName] = {
      id,
      address,
      ...deployedContract
    };
  });
  return {
    ...initialState,
    provider,
    contracts: {
      ...deployed
    }
  };
};
