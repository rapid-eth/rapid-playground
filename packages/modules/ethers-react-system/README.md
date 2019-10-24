# Ethers React System

[![build status](https://img.shields.io/travis/com/KamesCG/react-context-portal.svg)](https://travis-ci.com/KamesCG/react-context-portal)
[![code coverage](https://img.shields.io/codecov/c/github/KamesCG/react-context-portal.svg)](https://codecov.io/gh/KamesCG/react-context-portal)
[![code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![made with lass](https://img.shields.io/badge/made_with-lass-95CC28.svg)](https://lass.js.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm downloads](https://img.shields.io/npm/dt/react-context-portal.svg)](https://npm.im/ethers-react-system)

Components

example contract: 0x4c5effcd6eb5fa67e330c5d29f87df52dff01c05

```
npm install @rapid/ethers-hooks
```

### Example

```js
import { EthersProvider } from '@rapid/ethers-hooks';

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
- [Deploy Contracts](#deploy-contracts)
- [Sign Transaction](#sign-transaction)
- [Sign Message](#sign-message)
- [Sign Typed Message](#sign-typed-message)
- [Message Decryption and Encryption](#message-decryption-and-encryption)
- [Contributors](#contributors)
- [License](#license)

## Install

[npm][]:

```sh
npm install @rapid/ethers-hooks
```

[yarn][]:

```sh
yarn add @rapid/ethers-hooks
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

You can initialize contracts using

```js
ethers.initContract(...params);
// script
```

the function requires the contract address and ABI and has additional optional requirements.

```js
import { EthersProvider, EthersConsumer } from '@rapid/ethers-hooks';
import TestContract from './build/TestContract.json';
const deployedAddress = '0x...';

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
        ethers.initContract({
          abi: TestContract.abi,
          address: deployedAddress
        });

        return <h1>There are {ethers.deployed.length} deployed.</h1>;
      }}
    </EthersConsumer>
  );
};

export default App;
// script
```

## Deploy Contracts

Insert documention for contract deployment

## Sign Transaction

Insert documentation for transaction signing/sending

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

##

[npm]: https://www.npmjs.com/
[yarn]: https://yarnpkg.com/
