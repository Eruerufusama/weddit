import { writable } from 'svelte/store';

let isCompactValue = false;

if (typeof localStorage !== 'undefined') {
	if (localStorage.getItem('isCompact') !== null) {
		isCompactValue = JSON.parse(localStorage.getItem('isCompact'));
	}
}

export const isCompact = writable(isCompactValue);

isCompact.subscribe((newValue) => {
	if (typeof localStorage !== 'undefined') {
		localStorage.setItem('isCompact', JSON.stringify(newValue));
	}
});
