
/**
 * @name RegionFooterDashboard
 * @description Default Top RegionFooterDashboard region component.
 */
/* --- Global --- */
import { Modal, Toast } from '@horizin/design-system-organisms'

const MenuStyle = {
  styled: {
    borderRadius: 3,
    color: 'white',
    fontSize: 1,
    p: 2,
    opacity: .7,
  },
  hover: {
    color: 'white',
    opacity: 1,
  },
  active: {
    bg: 'rgba(255,255,255,0.3)',
    opacity: 1,
  }
}

const RegionFooterDashboard = props => {
  return (
    <Atom.Flex alignCenter between flex={1} sx={{...props}}>
      {/* Left */}
      <Atom.Flex alignCenter>
        {/* Menu */}
        <Atom.Flex alignCenter color='white'>
          <Molecules.Menu
            styled={{
              m: 2
            }}
            items={[
              {
                label: 'Home',
                to: '/'
              },
              {
                label: 'Feedback',
                to: '/feedback'
              },
              {
                label: 'Support',
                to: '/support'
              },
            ]}
          />
        </Atom.Flex>
      {/* Right */}
      </Atom.Flex>
    </Atom.Flex>
  )
}


export default RegionFooterDashboard