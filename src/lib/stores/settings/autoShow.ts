import { writable } from 'svelte/store';

let showAllImagesValue = false;
let showAllSelfpostsValue = false;
let showAllVideosValue = false;

if (typeof localStorage !== 'undefined') {
    if (localStorage.getItem('showAllImages') !== null) {
        showAllImagesValue = JSON.parse(localStorage.getItem('showAllImages'));
    }
    if (localStorage.getItem('showAllSelfposts') !== null) {
        showAllSelfpostsValue = JSON.parse(localStorage.getItem('showAllSelfposts'));
    }
    if (localStorage.getItem('showAllVideos') !== null) {
        showAllVideosValue = JSON.parse(localStorage.getItem('showAllVideos'));
    }
}

export const showAllImages = writable(showAllImagesValue);
export const showAllSelfposts = writable(showAllSelfpostsValue);
export const showAllVideos = writable(showAllVideosValue);

showAllImages.subscribe((newValue) => {
    if (typeof localStorage !== 'undefined') {
        localStorage.setItem('showAllImages', JSON.stringify(newValue));
    }
});
showAllSelfposts.subscribe((newValue) => {
    if (typeof localStorage !== 'undefined') {
        localStorage.setItem('showAllSelfposts', JSON.stringify(newValue));
    }
})
showAllVideos.subscribe((newValue) => {
    if (typeof localStorage !== 'undefined') {
        localStorage.setItem('showAllVideos', JSON.stringify(newValue));
    }
})