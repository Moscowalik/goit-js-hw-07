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
    <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
    `;
    })
    .join("");
}

const openedPic = basicLightbox.create(
  `
    <img src=" " width="800" height="600">
    `
);
const modalPicUrl = openedPic.element().querySelector("img");

function onGalleryRefClick(e) {
  e.preventDefault();

  if (e.target.nodeName !== "IMG") {
    return;
  }
  modalPicUrl.src = e.target.dataset.source;

  openedPic.show();

  window.addEventListener("keydown", onEscKeyPress);
}

function onEscKeyPress(e) {
  e.preventDefault();

  if (e.key === "Escape") {
    openedPic.close();
    window.removeEventListener("keydown", onEscKeyPress);
  }
}
