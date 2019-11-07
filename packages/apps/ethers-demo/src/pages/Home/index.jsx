import React from 'react';
import {withContext} from 'ethers-react-system';
import TitleNumber from './TitleNumber.js';

/* --- Component --- */
/**
 * @todo Make the initialization of the address and wallet be syncronous if the ethereum has already been enabled.
 */

class Home extends React.Component {
  constructor(props) {
    super(props);
    const {ethers} = props;
    ethers.generateWallet();
  }
  render() {
    const {ethers} = this.props;
    return <TitleNumber ethers={ethers}></TitleNumber>;
  }
}

export default withContext(Home);
