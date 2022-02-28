const drawImage = (item) => {
    const imgElement = document.createElement('img');
    imgElement.src = item.resource;
    imgElement.classList = 'gallery_item__img';
    imgElement.alt = item.title;
    return imgElement;
}
const drawAudio = (item) => {
    const audioElement = document.createElement('audio');
    audioElement.classList = 'gallery_item__audio';
    audioElement.src = item.resource;
    audioElement.controls = true;
    return audioElement;
}
const drawVideo = (item) => {
    const videoElement = document.createElement('video');
    videoElement.classList = 'gallery_item__video';
    videoElement.src = item.resource;
    videoElement.controls = true;
    return videoElement;
}
const ITEM_TYPES = {
    image: drawImage,
    audio: drawAudio,
    video: drawVideo
}

export const drawItem = (item) => {
    const itemElement = document.createElement('div');
    itemElement.classList = 'gallery__item';

    const resourceWrapElement =document.createElement('div');
    resourceWrapElement.classList = 'gallery_item__resource';

    const drawerType = ITEM_TYPES[item.type];
    resourceWrapElement.appendChild(drawerType(item));

    const titleElement = document.createElement('p');
    titleElement.classList = 'gallery_item__title';
    titleElement.innerText = item.title;

    itemElement.appendChild(resourceWrapElement);
    itemElement.appendChild(titleElement);
    return itemElement;
}