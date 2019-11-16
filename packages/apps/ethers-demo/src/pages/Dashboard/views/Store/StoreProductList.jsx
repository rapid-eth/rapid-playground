/**
 * @name CommunicationsSMS
 * @description View list of SMS log.
 * @version 1.0.0
 */
/* --- Global --- */
import { Component } from '@horizin/ui-compose'

/* --- Local --- */
import Forms from 'foundry/Forms'

/* --- Module --- */
// import { sms } from './sample'

const Communications = props =>
<Atom.Box>
  <Atom.Box sx={{p: 0}}>
    <Atom.Flex alignCenter between sx={{bg: 'smoke', boxShadow: 0, p: 3}}>
      <Atom.Heading lg heavy mb={0}>Create Product</Atom.Heading>
      <Atom.Flex>
        <Molecules.Link to='/dashboard/store/product/create'>
          <Atom.Button effects={['blue']} sx={{ml: 2}}>Create</Atom.Button>
        </Molecules.Link>
      </Atom.Flex>
    </Atom.Flex>

    <Atom.Box sx={{p:4, mt:3}}>

    </Atom.Box>
  </Atom.Box>
</Atom.Box>


export default Communications
