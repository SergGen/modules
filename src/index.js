import './style.scss'
import {images} from './items.js'
import {drawItem} from "./drawItem";


const galleryParentElement = document.querySelector('#gallery');

images.map(item => galleryParentElement.appendChild(drawItem(item)));