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
   <figure class="h-[200px] overflow-hidden">
    <img
    class="object-cover w-full h-48 rounded"
      src=${video.thumbnail}
      alt=${video.title}
      />
  </figure>
  <div class="px-0 py-2 flex gap-2">
    <div>
      <img
        class="w-10 h-10 rounded-full object-cover"
        src=${video.authors[0].profile_picture}
        alt=''
      />
      <div>
        <h2 class="card-title text-lg font-semibold">${video.title}</h2>
        <div class="flex items-center gap-2">
            <p class="text-gray-400">${video.authors[0].profile_name}</p>
            <img class="w-5" src="https://img.icons8.com/?size=48&id=D9RtvkuOe31p&format=png"/>
        </div>
        <p class="text-sm text-gray-500">${video.channel}</p>
        <p class="text-sm text-gray-500">${video.views} views • ${video.date}</p>
      </div>
    </div>
  </div>
    `;
    videoContainer.appendChild(card);
  });
};

loadVideos();
