import { ethers } from 'ethers';
import {
  getLatestDeploymentAddress,
  hashCode,
  networkRouting
} from '../utilities';

/**
 * @summary The function is called by the 'useReducer' functionality, it will process the given smart contracts
 *  and then add them to the initial state of the provider.
 * @param {Array} contracts an array of the contract ABIs to be initialized
 * @returns the initial state including with the initialized contracts
 */
export const initialize = contracts => initialState => {
  const deployed = {};
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

const getContract = contract => {
  const provider = networkRouting('metamask');
  const wallet = provider.getSigner();
  const address = getLatestDeploymentAddress(contract);
  const deployedContract = new ethers.Contract(address, contract.abi, wallet);
  return [deployedContract, address];
};
