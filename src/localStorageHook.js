import { useState, useEffect } from "react";

export const useLocalStorageState = (key, defaultValue) => {
	const [state, setState] = useState(() => {
		const value = JSON.parse(localStorage.getItem(key) || defaultValue);
		return value;
	});

	useEffect(() => {
		localStorage.setItem(key, state);
	}, [state, key]);
	return [state, setState];
};
