/**
 * @name CommunicationsVoice
 * @description View list of voice log.
 * @version 1.0.0
 */
/* --- Global --- */
import { VoiceLogItem } from '@horizin/twilio-design-system'

/* --- Local --- */

/* --- Module --- */
import { sms } from './sample'

const CommunicationsVoice = props =>
<Atom.Box>
  <Atom.Box sx={{p: 0}}>
    <Atom.Flex alignCenter between sx={{bg: 'smoke', boxShadow: 0, p: 3}}>
      <Atom.Heading lg heavy mb={0}>Voice Logs</Atom.Heading>
      <Atom.Flex>
        <Atom.Button effects={['white']}>Archive</Atom.Button>
        <Atom.Button effects={['blue']} sx={{ml: 2}}>Export</Atom.Button>
      </Atom.Flex>
    </Atom.Flex>

    <Atom.Box sx={{p:4, mt:3}}>
      <Atom.Flex between>
        <Atom.Span>From</Atom.Span>
        <Atom.Span>To</Atom.Span>
        <Atom.Span>Date</Atom.Span>
        <Atom.Span>Actions</Atom.Span>
      </Atom.Flex>
  
      <Atom.HorizontalRule />
      {
        sms.map( item =>
          <VoiceLogItem
            {...item} 
          />)
      }
    </Atom.Box>
  </Atom.Box>
</Atom.Box>


export default CommunicationsVoice
