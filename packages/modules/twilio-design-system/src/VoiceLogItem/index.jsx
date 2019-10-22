/* --- Global --- */
import React from 'react'
import PropTypes from 'prop-types'
import { Box, Flex, Heading, Span, HorizontalRule } from '@horizin/design-system-atoms'
import { Modal } from '@horizin/design-system-organisms'
import { useTimestampConvertEffect } from '../effects'

const SMSLogItem = ({ as, sx, children, ...props }) => {
  const timeFormatted = useTimestampConvertEffect(props)
  return (
    <Flex alignCenter
      sx={{
        alignContent: 'center',
        justifyContent: 'space-between',
        bg: 'white',
        borderRadius: 4,
        boxShadow: 0,
        display: 'flex',
        my: 1,
        px: 2,
        py: 3,
        zIndex: 10,
        ...sx,
      }}
    >
      <Span sx={{flex:2}}>{props.from}</Span>
      <Span sx={{flex:2}}>{props.to}</Span>
      <Span sx={{flex:2}}>{timeFormatted}</Span>
      <Modal content={<SMSMetadata />} >
        <Span variants={['tag']} effects={['white', 'sm']} sx={{cursor: 'pointer'}} >Details</Span>
      </Modal>
    </Flex>
  )
}

SMSLogItem.defaultProps = {
  sx: {}
}

SMSLogItem.propTypes = {
  sx: PropTypes.object
}

const SMSMetadata = props => { 
 return(
  <Box bg sx={{bg: '#FFF', p: 3, minWidth: 450}} >
    <Heading>SMS Metadata</Heading>
    <HorizontalRule my={2} />
  </Box>
)}

export default SMSLogItem