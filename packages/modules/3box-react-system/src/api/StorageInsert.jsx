import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'
import { BoxInject } from '3box-react-state'

const StorageInsert = ({ box, ...props }) => {

  console.log(props, 'storage insert')
  useEffect(() => {
    if (props.space && props.index && props.delta && props.data) {
      box.insert({
        address: props.address,
        space: props.space,
        access: 'public',
        index: props.index,
        key: props.delta,
        value: props.data,
      })
    }
  }, [props.data])

  return null
}

StorageInsert.defaultProps = {

}

StorageInsert.propTypes = {

}

export default props =><BoxInject><StorageInsert {...props} /></BoxInject>
