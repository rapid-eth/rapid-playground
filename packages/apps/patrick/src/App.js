
/**
 * @function Application
 * @version 1.0.0
 * @description Application
 */

/* --- Local --- */
import './assets/App.css';
import './assets/index.css';
import { Router } from '@reach/router'
/*
* Providers
* Initialize application state providers.
* @todo Create provider plugin system.
*/
import Providers from './providers'

import {
	Account,
	CMS,
	Dashboard,
	Contribute,
	Feedback,
	Home,
	Started,
	Support,
	Profile
} from './pages'

import FeaturesContent from './content/features'

/* --- Component --- */
export default () =>
	<Providers>
		<Router width='100%'>
			<Home path='/*' />
			<Account path='/account/*' />
			<CMS path='/cms/*' />
			<Contribute path='/contribute' />
			<Dashboard path='/dashboard/*' />
			<Feedback path='/feedback' />
			<Support path='/support' />
			<Started path='/started' />
			<Profile path='/profile/:address' />

			<FeaturesContent path='/features/*' /> 
		</Router>
	</Providers>