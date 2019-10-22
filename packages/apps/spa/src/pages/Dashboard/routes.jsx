
/* --- Global --- */
import { Router } from '@reach/router'

import Communications from './views/Communications'
import CommunicationsSMS from './views/CommunicationsSMS'
import CommunicationsVoice from './views/CommunicationsVoice'
import CommunicationsEmail from './views/CommunicationsEmail'

import StoreProductCreate from './views/Store/StoreProductCreate'
import StoreProductList from './views/Store/StoreProductList'


/* --- Component --- */
export default () =>
<Router width='100%' primary={false}>
  <Communications path='/communications/*' />
  <CommunicationsSMS path='/communications/sms/*' />
  <CommunicationsVoice path='/communications/voice/*' />
  <CommunicationsEmail path='/communications/email/*' />
  <StoreProductList path='/store/products' />
  <StoreProductCreate path='/store/product/create' />
</Router>