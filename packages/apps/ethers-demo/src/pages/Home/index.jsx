import {useState} from 'react';
import {EthersContext} from 'ethers-react-system';
import Storage from '../../ethereum/contracts/Storage.json';
import TitleNumber from './TitleNumber.js';

/* --- Component --- */
const Home = () => {
  const [loaded, setLoad] = useState(false);
  return (
    <EthersContext.Consumer>
      {ethers => {
        console.log('Ethers: ', ethers);
        const {dispatch, wallet} = ethers;
        if (loaded === false && wallet !== undefined) {
          ethers.initContract({Contract: Storage}, dispatch, wallet);
          setLoad(true);
        }
        return <TitleNumber ethers={ethers}></TitleNumber>;
      }}
    </EthersContext.Consumer>
  );
};

export default Home;
