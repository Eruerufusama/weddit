import { writable } from 'svelte/store';

let showAllImages = false;
let showAllSelfposts = false;

if (typeof localStorage !== 'undefined') {
    if (localStorage.getItem('showAllImages') !== null) {
        showAllImages = JSON.parse(localStorage.getItem('showAllImages'));
    }
    if (localStorage.getItem('showAllSelfposts') !== null) {
        showAllSelfposts = JSON.parse(localStorage.getItem('showAllSelfposts'))
    }
}

export const showAllImagesStore = writable(showAllImages);
export const showAllSelfpostsStore = writable(showAllSelfposts);

showAllImagesStore.subscribe((newValue) => {
    if (typeof localStorage !== 'undefined') {
        localStorage.setItem('showAllImages', JSON.stringify(newValue));
    }
});
showAllSelfpostsStore.subscribe((newValue) => {
    if (typeof localStorage !== 'undefined') {
        localStorage.setItem('showAllSelfposts', JSON.stringify(newValue));
    }
})