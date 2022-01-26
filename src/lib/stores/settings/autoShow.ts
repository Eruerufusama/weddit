import { writable } from 'svelte/store';

let showAllImages = false;
let showAllSelfposts = false;
let showAllVideos = false;

if (typeof localStorage !== 'undefined') {
    if (localStorage.getItem('showAllImages') !== null) {
        showAllImages = JSON.parse(localStorage.getItem('showAllImages'));
    }
    if (localStorage.getItem('showAllSelfposts') !== null) {
        showAllSelfposts = JSON.parse(localStorage.getItem('showAllSelfposts'))
    }
    if (localStorage.getItem('showAllVideos') !== null) {
        showAllVideos = JSON.parse(localStorage.getItem('showAllVideos'))
    }
}

export const showAllImagesStore = writable(showAllImages);
export const showAllSelfpostsStore = writable(showAllSelfposts);
export const showAllVideosStore = writable(showAllVideos);

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
showAllVideosStore.subscribe((newValue) => {
    if (typeof localStorage !== 'undefined') {
        localStorage.setItem('showAllVideos', JSON.stringify(newValue));
    }
})