import React from 'react';
import {withEthers} from 'ethers-react-system';
import TitleNumber from './TitleNumber.js';

/* --- Component --- */
/**
 * @todo Make the initialization of the address and wallet be syncronous if the ethereum has already been enabled.
 */
class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {ethers} = this.props;
    console.log(ethers);
    return <TitleNumber ethers={ethers}></TitleNumber>;
  }
}

export default withEthers(Home);
