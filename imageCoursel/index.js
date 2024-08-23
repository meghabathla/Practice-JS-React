const imagesArray = [
  "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
  "https://imgv3.fotor.com/images/slider-image/A-clear-close-up-photo-of-a-woman.jpg",
  "https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg",
  "https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg",
  "https://www.akamai.com/site/im-demo/perceptual-standard.jpg?imbypass=true",
];
let currentIndex = 0;

const nextImage = () => {
  setImage(currentIndex + 1);
};

const imageContainer = document.querySelector("#image-container");
const btnPrev = document.querySelector(".btn-before");
const btnPost = document.querySelector(".btn-after");
const img = document.createElement("img");

const setImage = (index) => {
  let updatedIndex = index;
  if (index === imagesArray.length) {
    updatedIndex = 0;
  } else if (index < 0) {
    updatedIndex = imagesArray.length - 1;
  }
  img.src = imagesArray[updatedIndex];
  currentIndex = updatedIndex;
};

setImage(0);
img.alt = "Image";
imageContainer.appendChild(img);
console.log(imagesArray[0]);

btnPrev.addEventListener("click", () => {
  setImage(currentIndex - 1);
});

btnPost.addEventListener("click", nextImage);

setInterval(nextImage, 2000);
