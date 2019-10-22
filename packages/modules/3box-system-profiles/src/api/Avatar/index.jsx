/**
 * @function Avatar
 * @description Display Profile Avatar with menu options.
 * @version 1.0.0
 */
/* --- Global --- */
import React from 'react'
import { BoxInject } from '3box-react-state'
import { ProfileImage } from '3box-system-profiles-views'

/* --- Component --- */
const Avatar = ({ box, ...props }) =>
  <A.Panel content={<CMS.ProfilePanel />} >
    <A.Flex center column>
      <ProfileImage {...props.styled} />
    </A.Flex>
  </A.Panel>

Avatar.defaultProps = {

}

export default props => <BoxInject><Avatar {...props} /></BoxInject>
