# Ethers React System

[![build status](https://img.shields.io/travis/com/KamesCG/react-context-portal.svg)](https://travis-ci.com/KamesCG/react-context-portal)
[![code coverage](https://img.shields.io/codecov/c/github/KamesCG/react-context-portal.svg)](https://codecov.io/gh/KamesCG/react-context-portal)
[![code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![made with lass](https://img.shields.io/badge/made_with-lass-95CC28.svg)](https://lass.js.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm downloads](https://img.shields.io/npm/dt/react-context-portal.svg)](https://npm.im/ethers-react-system)

example contract: 0x4c5effcd6eb5fa67e330c5d29f87df52dff01c05

```js
npm install @rapid/ethers-provider
```

## Example

```js
import { EthersProvider } from '@rapid/ethers-provider';

<App>
  <EthersProvider>...</EthersProvider>
</App>;
```

The package pairs with the `3box-system` library. The design system library hooks into the state system to help manage user logins, connecting to spaces, posting to threads, etc....

Add Linting back to package.json
"lint": "xo && remark . -qfo",

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Getting Started](#getting-started)
- [Initialize Contracts](#initializing-contracts)
- [Wallet Generation](#wallet-generation)
- [Deploy Contracts](#deploy-contracts)
- [Sign Transaction](#sign-transaction)
- [Sign Message](#sign-message)
- [Sign Typed Message](#sign-typed-message)
- [Message Decryption and Encryption](#message-decryption-and-encryption)
- [Contributors](#contributors)
- [License](#license)

## Install

### [npm]

```sh
npm install @rapid/ethers-providers
```

### [yarn][]

```sh
yarn add @rapid/ethers-providers
```

## Getting Started

```js
import { EthersProvider, EthersConsumer } from '@rapid/ethers-hooks';

const App = () => {
  return (
    <EthersProvider>
      <WrappedApp />
    </EthersProvider>
  );
};

const WrappedApp = () => {
  return (
    <EthersConsumer>
      {ethers => {
        return <h1>There are {ethers.deployed.length} deployed.</h1>;
      }}
    </EthersConsumer>
  );
};

export default App;
// script
```

## Initializing Contracts

There are two major ways of initializing contracts. Either through the action creator or by passing it to the top-level provider.

### Via Actions Creator

```js
ethers.initContract(Contract[,deployedAddress]);
// script
```

the function requires the contract address and ABI and has additional optional requirements.

```js
import React from 'react';
import { withEthers } from '@rapid/ethers-hooks';
import TestContract from './build/TestContract.json';
// you can optionally pass the deployedAddress but by default
// it will be initialized to the latest deployment address
const deployedAddress = '0x...';

class WrappedApp extends React.Component {
  constructor(props) {
    super(props);
    const { ethers } = props;
    ethers.initContract(TestContract);
  }
  render() {
    const { ethers } = this.props;
    const contracts = Object.keys(ethers.contracts);
    return <h1>There are {contracts.length} initialized</h1>;
  }
}

export default withEthers(WrappedApp);
// script
```

### Via Ethers Provider

```js
import React from 'react';
import { EthersProvider } from '@rapid/ethers-hooks';
import WrappedApp from './WrappedApp';
import TestContract from './build/TestContract.json';

const App = () => {
  return (
    <EthersProvider contracts={[TestContract]}>
      <WrappedApp />
    </EthersProvider>
  );
};

export default App;
// script
```

## Wallet Generation

Although the provider defaults to utilizing the Ethereum provider (either via Metamask or a dApp browser).
It is possible to generate a burner wallet that can be utilized in the absence of Metamask or dApp browser.

The following action creator will generate a wallet with the set provider(defaulting the JSON if none). It will set the wallet and address property of the ethers state object.

```js
ethers.generateWallet()
// script
```

```js
import React from 'react';
import { withEthers } from 'ethers-react-system';

class Home extends React.Component {
  constructor(props) {
    super(props);
    const { ethers } = props;
    ethers.generateWallet();
  }

  render() {
    const { ethers } = this.props;
    return <h1>The address is {ethers.address}</h1>
  }
}

export default withEthers(Home);
// script
```

## Sign Transaction

Insert documentation for sending transactions

## Sign Message

Insert documentation for signing messages

## Sign Typed Message

Insert documentation for signing typed messages (ERC712)

## Message Decryption and Encryption

Insert documentation for encrypting and decrypting messages

## Contributors

| Name      | Website                    |
| --------- | -------------------------- |
| **Kames** | <https://www.kamescg.com>  |
| **Luis**  | <https://www.luisosta.com> |

## License

[MIT](LICENSE) © [Kames](https://www.kamescg.com)

[npm]: https://www.npmjs.com/
[yarn]: https://yarnpkg.com/
