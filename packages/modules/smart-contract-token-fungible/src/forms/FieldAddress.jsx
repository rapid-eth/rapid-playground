/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Box, Button, Span, Heading, Flex } from '@horizin/design-system-atoms'
import { Field } from '@horizin/design-system-molecules'
import { Toast } from '@horizin/design-system-organisms'
const AddressField = ({ name, register, placeholder, errors, styled, ...props }) => {
  const [address, setAddress] = useState()
  return (
    <Flex alignCenter>
      <Field
        name={name}
        register={register}
        errors={errors}
        defaultValue={address}
        placeholder={placeholder}
        flex={5}
        variants={['text']}
      />
      <Flex flex={1} justifyContent='flex-end'>
        <Box textCenter justifySelf='flex-end' mx={3}>
          <Toast content={<div />}>
            <Span xs pointer bg='blue' color='white' variant='tag' my={3} >Friends</Span>
          </Toast>
        </Box>
        <Box justifySelf='flex-end'>
          <Toast content={<div />}>
            <Span pointer bg='gray' color='charcoal' variant='tag' my={3} >QR</Span>
          </Toast>
        </Box>
      </Flex>
    </Flex>
  )
}

export default AddressField