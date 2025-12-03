// 1. Fetch , Load and Show Categories on html.

// create loadCategories function
const loadCategories = () => {
  // fetch data from API.
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))
    .catch((error) => console.log(error));
};

// create loadCategories function
const displayCategories = (categories) => {
  const categoryContainer = document.getElementById("categories");
  categories.forEach((item) => {
    // create a button.
    const button = document.createElement("button");
    button.classList =
      "btn bg-gray-200 hover:bg-red-600 hover:text-white border-0";
    button.innerText = item.category;

    // add button to category container
    categoryContainer.appendChild(button);
  });
};

loadCategories();

// 2. Fetch , Load and Show Videos on html.

// create loadVideos function
// create loadCategories function
const loadVideos = () => {
  // fetch data from API.
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data) => displayVideos(data.videos))
    .catch((error) => console.log(error));
};

const displayVideos = (videos) => {
  const videoContainer = document.getElementById("videos");
  videos.forEach((video) => {
    const card = document.createElement("div");
    card.classList = "card w-80";
    card.innerHTML = `
   <figure>
    <img
    class="object-cover w-full h-48 rounded"
      src=${video.thumbnail}
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">Card Title</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
    `;
    videoContainer.appendChild(card);
  });
};

loadVideos();
