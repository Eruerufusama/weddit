import { writable } from 'svelte/store';

let isCompact = false;

if (typeof localStorage !== 'undefined') {
    if (localStorage.getItem('isCompact') !== null) {
        isCompact = JSON.parse(localStorage.getItem('isCompact'));
    }
}

export const isCompactStore = writable(isCompact);

isCompactStore.subscribe((newValue) => {
    if (typeof localStorage !== 'undefined') {
        localStorage.setItem('isCompact', JSON.stringify(newValue));
    }
});