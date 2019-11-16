/**
 * @name CommunicationsSMS
 * @description View list of SMS log.
 * @version 1.0.0
 */
/* --- Global --- */
import { SMSLogItem } from '@horizin/twilio-design-system'

/* --- Local --- */

/* --- Module --- */
import { sms } from './sample'

const Communications = props =>
<Atom.Box>
  <Atom.Box sx={{p: 0}}>
    <Atom.Flex alignCenter between sx={{bg: 'smoke', boxShadow: 0, p: 3}}>
      <Atom.Heading lg heavy mb={0}>SMS Logs</Atom.Heading>
      <Atom.Flex>
        <Atom.Button effects={['white']}>Archive</Atom.Button>
        <Atom.Button effects={['blue']} sx={{ml: 2}}>Export</Atom.Button>
      </Atom.Flex>
    </Atom.Flex>

    <Atom.Box sx={{p:4, mt:3}}>
      <Atom.Flex between>
        <Atom.Span>From</Atom.Span>
        <Atom.Span>To</Atom.Span>
        <Atom.Span>Message</Atom.Span>
        <Atom.Span>Date</Atom.Span>
        <Atom.Span>Actions</Atom.Span>
      </Atom.Flex>
  
      <Atom.HorizontalRule />
      {
        sms.map( item =>
          <SMSLogItem
            {...item} 
          />)
      }
    </Atom.Box>
  </Atom.Box>
</Atom.Box>


export default Communications
