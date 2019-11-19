import React from 'react';
import {Site} from 'templates';

import {useNumber} from './utils/storageNumber';
const cardData = {
	title: 'Decentralized Application Playground',
	tagline: 'Rapidly Experiment with Ethereum Technology'
};

const TitleNumber = ({ethers}) => {
	const number = useNumber(ethers.contracts['Storage']);
	return (
		<Site
			sx={{bg: 'smoke'}}
			sxMain={{alignItems: 'center', justifyContent: 'center'}}
		>
			<Molecules.Card
				layout="showcase"
				variants={['large', 'centered']}
				sx={{
					p: 3
				}}
				sxTitle={{
					fontWeight: 700
				}}
				sxTagline={{
					fontWeight: 300
				}}
				sxMain={{
					maxWidth: 980
				}}
				{...cardData}
				image={null}
			/>
			<>
				<h1>The current number is {number}</h1>
				<button
					onClick={() =>
						ethers.sendTransaction('Storage', 'setNumber', [10])
					}
				>
					Set the number to 10
				</button>
				<button onClick={() => ethers.signMessage('HelloWorld', 'hw')}>
					Sign 'Hello World' message
				</button>

				<button
					onClick={() => ethers.deployContract('Storage-Factory')}
				>
					Deploy Storage Contract
				</button>
			</>
		</Site>
	);
};

export default TitleNumber;
