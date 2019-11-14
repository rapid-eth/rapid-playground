import {Site} from 'templates';
import {
  Approve,
  Allowance,
  Transfer
} from '@rapid/smart-contract-token-fungible';

/* --- Content --- */
const featureOne = {
  title: 'Provider',
  tagline: 'Connect to Etheruem',
  summary:
    'Proin commodo venenatis felis mollis porta. Phasellus pretium elit et neque gravida, eget malesuada dui placerat. Proin quis luctus libero.',
  image: 'https://image.flaticon.com/icons/svg/1673/1673590.svg'
};
const featureTwo = {
  title: 'Wallet',
  tagline: 'Manage EThereum Accounts',
  summary:
    'Proin commodo venenatis felis mollis porta. Phasellus pretium elit et neque gravida, eget malesuada dui placerat. Proin quis luctus libero.',
  image: 'https://image.flaticon.com/icons/svg/1673/1673612.svg'
};
const featureThree = {
  title: 'Utilities',
  tagline: 'Control the Chaos',
  summary:
    'Proin commodo venenatis felis mollis porta. Phasellus pretium elit et neque gravida, eget malesuada dui placerat. Proin quis luctus libero.',
  image: 'https://image.flaticon.com/icons/svg/1673/1673579.svg'
};

/* --- Component --- */
const Started = props => (
  <Site>
    {/* Hero */}
    <Molecules.Card
      layout="showcase"
      title="Tokens"
      tagline="Launch ERC20 and ERC721 Instantly"
      variants={['large', 'centered']}
      variantsMain={['scopedLarge']}
      sx={{
        bg: 'smoke',
        p: 6,
        py: 6
      }}
      sxTitle={{
        fontWeight: 700
      }}
      sxTagline={{
        fontWeight: 300
      }}
      sxMain={{
        maxWidth: 980
      }}
    />

    {/* Features */}
    <Atom.Container my={5}>
      <Atom.Flex sx={{}}>
        <Molecules.Card
          {...featureOne}
          sx={{flex: 1, p: 3}}
          sxImage={{maxWidth: 55, p: 2, pr: 3}}
        />

        <Molecules.Card
          {...featureTwo}
          sx={{flex: 1, p: 3}}
          sxImage={{maxWidth: 55, p: 2, pr: 3}}
        />

        <Molecules.Card
          {...featureThree}
          sx={{flex: 1, p: 3}}
          sxImage={{maxWidth: 55, p: 2, pr: 3}}
        />
      </Atom.Flex>
    </Atom.Container>

    <Atom.Container maxWidth={780} mb={5}>
      <Allowance />
      <Approve />
      <Transfer />
    </Atom.Container>
  </Site>
);

export default Started;
