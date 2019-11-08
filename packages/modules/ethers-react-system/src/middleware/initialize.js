import { hashCode, getContract } from '../utilities';

/**
 * @summary The function is called by the 'useReducer' functionality, it will process the given smart contracts
 *  and then add them to the initial state of the provider.
 * @param {Array} contracts an array of the contract ABIs to be initialized
 * @returns the initial state including with the initialized contracts
 */
export const initialize = contracts => initialState => {
  let deployed = {};
  contracts.forEach(contract => {
    const [deployedContract, address] = getContract(contract);
    const id = hashCode(deployedContract);
    deployed[contract.contractName] = {
      id,
      address,
      ...deployedContract
    };
  });
  return {
    ...initialState,
    contracts: {
      ...deployed
    }
  };
};
