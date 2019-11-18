import React from 'react';
import {withEthers} from 'ethers-react-system';
import TitleNumber from './TitleNumber.js';

/* --- Component --- */

class Home extends React.Component {
  render() {
    const {ethers} = this.props;
    console.log(ethers);
    return <h1>Hello</h1>; //<TitleNumber ethers={ethers}></TitleNumber>;
  }
}

export default withEthers(Home);
