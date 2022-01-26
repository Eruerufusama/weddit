import { writable } from 'svelte/store';

let favoriteSubreddits = ['reactjs', "sveltejs"];

if (typeof localStorage !== 'undefined') {
    if (localStorage.getItem('favoriteSubreddits') !== null) {
        favoriteSubreddits = JSON.parse(localStorage.getItem('favoriteSubreddits'));
    }
}

export const favoriteSubredditsStore = writable(favoriteSubreddits);

favoriteSubredditsStore.subscribe((newList) => {
    if (typeof localStorage !== 'undefined') {
        localStorage.setItem('favoriteSubreddits', JSON.stringify(newList));
    }
});