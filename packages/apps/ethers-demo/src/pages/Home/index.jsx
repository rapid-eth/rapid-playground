import {useState} from 'react';
import {EthersContext, withContext} from 'ethers-react-system';
import Storage from '../../ethereum/contracts/Storage.json';
import TitleNumber from './TitleNumber.js';

/* --- Component --- */
/**
 * @todo Make the initialization of the address and wallet be syncronous if the ethereum has already been enabled.
 */

const Home = props => {
  const {ethers} = props;
  console.log(ethers);
  const [loaded, setLoad] = useState(false);
  if (loaded === false && ethers.wallet !== undefined) {
    ethers.initContract(Storage);
    setLoad(true);
  }
  return <TitleNumber ethers={ethers}></TitleNumber>;
};

export default withContext(Home);
