import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector(".gallery");
const galleryItem = creategalleryItem(galleryItems);

galleryRef.insertAdjacentHTML("beforeend", galleryItem);

galleryRef.addEventListener("click", onGalleryRefClick);

function creategalleryItem(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
    `;
    })
    .join("");
}

var lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});

function onGalleryRefClick(e) {
  e.preventDefault();
  const modalPic = e.target.dataset.source;

  if (!modalPic) {
    return;
  }

  window.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") {
      return;
    }
    const openedModalWindow = document.querySelector(".basicLightbox");
    openedModalWindow.classList.remove("basicLightbox--visible");
  });
}
