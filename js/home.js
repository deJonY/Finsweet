// const latestPostRow = document.getElementById("latest-post__row");
// function getPostRow({ photo, category, user, description }) {
//   return `
//         <img width="50px" src="${IMAGE_URL}${photo._id}.${
//     photo.name.split(".")[1]
//   }" alt=${photo.name}/>
//       <div>
//         <h5>${category.name}</h5>
//         <h1>${category.description}</h1>
//       </div>
//       <div>
//         <span>${user.first_name}</span>
//         <span>${user.last_name}</span>
//         <span>${user.updateAt.split("T")}</span>
//       </div>
//         <div>
//           <p>${description}</p>
//         </div>
//   `;
// }
// function getLatestPost(el) {
//   request.get("post/lastone").then((res) => {
//     console.log(res.data);
//     latestPostRow.innerHTML += getPostRow(el);
//   });
// }
// getLatestPost();

const homeBlogs = document.querySelector(".home-blogs");
const homecategory = document.querySelector(".category");

// BLOGS
function getBlogsRow({
  photo,
  category: { name, description },
  user,
  updatedAt,
}) {
  return `
      <div class="carousel-item">
          <img width="405px" height="318px" src="${IMAGE_URL}${photo._id}.${
    photo.name.split(".")[1]
  }"/>
      <div class="blogs__content-span">
        <span>By <span class="iii">${user.first_name} ${
    user.last_name
  }</span> | Aug</span>
        <span>${updatedAt.split("T")[0]}</span>
      </div>
      <div class="blogs__content-name">
        <h1>${name}</h1>
      </div>
        <div class="blogs__content-description">
          <p>${description}</p>
        </div>
      </div>
  `;
}

function getBlogs() {
  request.get("post/lastones").then((res) => {
    res.data.forEach((el) => {
      homeBlogs.innerHTML += getBlogsRow(el);
    });
  });
}
getBlogs();

// Category
function getCategoryRow({ photo, name, description }) {
  return `
      <a href="./category.html">
          <div class="category__content">
           <img src="${IMAGE_URL}${photo._id}.${photo.name.split(".")[1]}"/>
          <h3>${name}</h3>
          <p>${description}</p>
        </div>
      <a/>
  `;
}

function getCategory() {
  request.get("category").then((res) => {
    homecategory.innerHTML = "";
    res.data.data.forEach((el) => {
      homecategory.innerHTML += getCategoryRow(el);
    });
  });
}
getCategory();
