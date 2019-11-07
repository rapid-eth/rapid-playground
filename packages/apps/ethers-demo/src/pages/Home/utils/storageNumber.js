import React, {useEffect, useState} from 'react';

export const useNumber = Storage => {
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
