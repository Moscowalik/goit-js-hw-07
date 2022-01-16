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

function onGalleryRefClick(e) {
  e.preventDefault();
  const modalPic = e.target.dataset.source;

  if (!modalPic) {
    return;
  }
  const openedPic = basicLightbox
    .create(
      `
    <img src="${modalPic}" width="800" height="600">
    `
    )
    .show();

  window.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") {
      return;
    }
    const openedModalWindow = document.querySelector(".basicLightbox");
    openedModalWindow.classList.remove("basicLightbox--visible");
  });
}
