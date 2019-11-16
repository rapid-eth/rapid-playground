
/**
 * @name RegionTop
 * @description Default Top RegionTop region component.
 */
/* --- Global --- */
import { Link } from '@reach/router'

const RegionTop = props => {
  return (
    <Atom.Flex alignCenter between sx={{variant: 'layout.header'}}>
      {/* Left */}
      <Atom.Flex alignCenter>
        <Link to='/'>
          <Atom.Heading md heavy mb={0}>{GLOBAL.siteName}</Atom.Heading>
        </Link>

        {/* Menu */}
        <Atom.Flex alignCenter ml={4}>
          <Molecules.Menu
            styled={{
              m: 2
            }}
            items={[
              {
                label: 'Getting Started',
                to: '/started'
              },
              {
                label: 'Ethers',
                to: '/features/ethers'
              },
              {
                label: '3Box',
                to: '/features/3box'
              },
              {
                label: 'Tokens',
                to: '/features/tokens'
              },
            ]}
          />
        </Atom.Flex>
        {/* Right */}
      </Atom.Flex>
      <Atom.Flex alignCenter>
        <Molecules.Menu
          styled={{
            m: 2
          }}
          items={[
            {
              label: 'Account',
              to: '/account'
            },
            {
              label: 'Profile',
              to: '/profile'
            },
          ]}
        />
        <Three.Login />
      </Atom.Flex>
    </Atom.Flex>
  )
}


export default RegionTop