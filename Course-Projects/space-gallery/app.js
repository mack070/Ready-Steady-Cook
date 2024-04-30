const thumbContainer = document.getElementById("thumb-container");
const displayImage = document.getElementById("display");


let imageIndex = 0; // this currently does nothing, but is a start

const images = [
{
url: "https://images.unsplash.com/photo-1543722530-d2c3201371e7?q=80&w=2674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
alt: "Whirlpool Galaxy",
},

{
url: "https://images.unsplash.com/photo-1610296669228-602fa827fc1f?q=80&w=2575&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
alt: "Rainbow Galaxy",
},

{
url: "https://images.unsplash.com/photo-1618393366766-849376aecc7c?q=80&w=2650&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
alt: "Red Space",
},

{
    url: "https://images.unsplash.com/photo-1608178398319-48f814d0750c?q=80&w=2406&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Purple Galaxy",
  },

{
url: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=2711&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
alt: "Awesome Space",
},

{
url: "https://images.unsplash.com/photo-1615378536579-61c7d173e8a9?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
alt: "Red Space",
},

{
url: "https://images.unsplash.com/photo-1611716524065-622312678d68?q=80&w=2611&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
alt: "Outer Space",
},
];


function createThumbnails() {
images.forEach(function (image) {
const img = document.createElement("img");
img.src = image.url;
img.alt = image.alt;
thumbContainer.appendChild(img);
img.addEventListener("click", function () {
createBigImage(image);
});
});
}


function createBigImage(image) {
displayImage.innerHTML = "";
const bigImg = document.createElement("img");
bigImg.src = image.url;
bigImg.alt = image.alt;
displayImage.appendChild(bigImg);
}

createThumbnails();
createBigImage(images[0]);