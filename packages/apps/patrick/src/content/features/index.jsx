
/* --- Global --- */
import { Router } from '@reach/router'

import FeatureEthers from './FeatureEthers'
import Feature3Box from './Feature3Box'
import FeatureTokens from './FeatureTokens'

/* --- Component --- */
export default () =>
<Router primary={false}>
  <FeatureEthers path='/ethers' />
  <Feature3Box path='/3box' />
  <FeatureTokens path='/tokens' />
</Router>