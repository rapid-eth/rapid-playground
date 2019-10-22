/**
 * @function Avatar
 * @description Display Profile Avatar with menu options. 
 */
/* --- Global --- */
import React from 'react'
import { BoxInject } from '3box-react-state'
import ProfileImage from './ProfileImage'

/* --- Component --- */
const Avatar = ({ box, variant, children, styled,...props  }) => 
<ProfileImage opacity={1}/>
    
Avatar.defaultProps = {

}

export default props =><BoxInject><Avatar {...props} /></BoxInject>
