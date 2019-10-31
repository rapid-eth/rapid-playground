import {useState, useEffect} from 'react';
import {Site} from 'templates';

const cardData = {
	title: 'Decentralized Application Playground',
	tagline: 'Rapidly Experiment with Ethereum Technology'
};
const useNumber = Storage => {
	const [num, setNumber] = useState(0);
	useEffect(() => {
		async function handleNumber() {
			const number = await Storage.getNumber();
			setNumber(number.toNumber());
		}

		if (Storage !== undefined) {
			handleNumber();
		}
	}, [Storage]);
	return num;
};
const TitleNumber = ({ethers}) => {
	const number = useNumber(ethers.contracts[0]);
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
				<button onClick={() => ethers.contracts[0].setNumber(10)}>
					Set the number to 10
				</button>
			</>
		</Site>
	);
};

export default TitleNumber;
