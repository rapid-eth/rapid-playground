/* --- Global --- */
import React, { useState, useEffect } from 'react';
import { utils } from 'ethers'
import PropTypes from 'prop-types'
import useForm from "react-hook-form";
import { Button, Span, Heading, Flex } from '@horizin/design-system-atoms'
import { Field } from '@horizin/design-system-molecules'
import { Toast } from '@horizin/design-system-organisms'
import { EthersInject, ethers } from 'ethers-react-system'

/* --- Local --- */
import AddressField from './FieldAddress'
import ContractInformation from '../ContractInformation'

/**
 * @function ERC20TokenTransfer
 * @param {Object} props props
 * @returns {Object} Form Component 
 */
const Transfer = ({ amount, ethers, contractAddress, contractName, delta, styled, ...props }) => {

  console.log(props, 'etths')

  const { handleSubmit, register, errors } = useForm();
  const [message, setMessage] = useState()
  const [deploying, setDeploying] = useState(false)
  const [status, setStatus] = useState({
    contract: false
  })

  /**
   * @function FormOnSubmit
   * @param {Object} values 
   */
  const onSubmit = async (values) => {
    let overrides = { gasLimit: 999000 };
    try {
      if (ethers.contracts[props.address]) {
        const amountParsed = utils.parseEther(values.amount)
        ethers.contracts[props.address].transfer(values.address, amountParsed, overrides)
        setDeploying(true)
      } else {
        return null
      }
    } catch (error) {
      console.log(error)
      setMessage('Contract Unavailable')
    }
  }

  /**
   * @function StatusEffect
   * @description Display component state to user.
   */
  const StatusEffect = () => useEffect(() => {
    if (ethers.contracts[props.address]) {
      setStatus({ contract: true })
    }
  }, [ethers.contracts[props.address]])

  /**
   * @function MessageEffect
   * @description Display component state to user.
   */
  const MessageEffect = () => useEffect(() => {
    if (message) { } // add toast message
  }, [message])

  /**
   * @function InitSmartContractEffect
   * @description Initialize contract from abi library with address input.
   * 
   */
  const InitSmartContractEffect = () => useEffect(() => {
    if (!ethers.contracts[contractAddress] && props.contractName) {
      if (props.library[props.contractName]) {
        ethers.contractInitFromLibrary({
          address: props.address,
          contractName: props.contractName
        })
      }
    }
  }, [
    ethers.contracts[contractAddress], // Watch contract instance.
    ethers.library[props.contractName] // Watch library reference.
  ])

  /* --- Init Effects --- */
  StatusEffect()
  MessageEffect()
  if (props.canInitContract) InitSmartContractEffect()

  /* --- Component --- */
  return (
    <>
      {
        props.label &&
        <Heading md {...props.styledLabel}>{props.label}</Heading>
      }
      <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }} {...styled} >
        <AddressField
          name="address"
          register={register}
          errors={errors}
          defaultValue={props.defaults.address}
          placeholder="To"
        />
        <Field
          name='amount'
          register={register}
          errors={errors}
          defaultValue={props.defaults.amount}
          placeholder="Amount"
          variants={['text']}
        />
        <Flex alignCenter>
          <Button sm type='submit' disabled={!status.contract} {...props.styledButton}>
            {deploying
              ? <Span>Confirming...</Span>
              : <Span>Tranfser {!status.contract && <Span xxs>Not Connected</Span>} </Span>
            }
          </Button>
          <Toast content={<ContractInformation contractName={props.contractName} address={props.address} />} >
            {
              status.contractName
                ? <Span ml={3}><Span xxs tag='white'>INFO</Span></Span>
                : <Span ml={3}><Span xxs tag='green'>Connect</Span></Span>
            }
          </Toast>
        </Flex>
      </form>
    </>
  )
}

Transfer.defaultProps = {
  contractName: undefined,
  canInitContract: true,
  defaults: {},
  label: 'Transfer',
  styled: {
    p: 2
  },
  styledButton: {
    variant: 'green',
    width: '100%'
  },
  styledLabel: {
    fontWeight: 700
  }
}

Transfer.propTypes = {
  address: PropTypes.string.isRequired,
  contractName: PropTypes.string,
  canInitContract: PropTypes.bool,
  defaults: PropTypes.object,
  label: PropTypes.string,
  styled: PropTypes.object,
  styledButton: PropTypes.object,
  styledLabel: PropTypes.object,
}

export default props => <EthersInject><Transfer {...props} /></EthersInject>