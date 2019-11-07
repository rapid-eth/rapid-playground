import {useState} from 'react';
import {withContext} from 'ethers-react-system';
import Storage from '../../ethereum/contracts/Storage.json';
import TitleNumber from './TitleNumber.js';

/* --- Component --- */
/**
 * @todo Make the initialization of the address and wallet be syncronous if the ethereum has already been enabled.
 */

const Home = props => {
  const {ethers} = props;
  const [res, setRes] = useState(() => {
    ethers.generateWallet();
    return 0;
  });
  console.log('Ethers: ', ethers);
  return <TitleNumber ethers={ethers}></TitleNumber>;
};

export default withContext(Home);
