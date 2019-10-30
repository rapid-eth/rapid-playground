import {useState} from 'react';
import {EthersContext} from 'ethers-react-system';
import Storage from '../../ethereum/Storage.json';
import TitleNumber from './TitleNumber.js';

/* --- Component --- */
const Home = props => {
  const [loaded, setLoad] = useState(false);
  return (
    <EthersContext>
      {ethers => {
        if (loaded === false) {
          ethers.initContract({Contract: Storage}, ethers.dispatch);
          setLoad(true);
        }
        return <TitleNumber ethers={ethers}></TitleNumber>;
      }}
    </EthersContext>
  );
};

export default Home;
