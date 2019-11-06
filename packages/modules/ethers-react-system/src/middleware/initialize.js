import { ethers } from 'ethers';
import { getLatestDeploymentAddress, hashCode } from '../utilities';
import { networkRouting } from '../effects';

/**
 * @summary
 * @param {Array<ContractABI>} contracts an array of the contract ABIs to be initialized
 * @returns the initial state including with the initialized contracts
 */
export const initialize = contracts => initialState => {
  contracts.map(async contract => {
    const provider = await networkRouting('metamask');
    const wallet = provider.getSigner();
    const address = getLatestDeploymentAddress(contract);
    const deployedContract = new ethers.Contract(address, contract.abi, wallet);
    const id = hashCode(deployedContract);
    initialState.contracts[id] = {
      id,
      address,
      ...deployedContract
    };
  });

  return initialState;
};
