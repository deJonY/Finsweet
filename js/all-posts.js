// const featuredPost = document.querySelector(".featured-post");

// function getFeaturedPost({ photo, category, user, description}) {
//   return `
//         <img src="${IMAGE_URL}${photo._id}.${
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
// function getFeaturedLatestPost() {
//   request.get("post/lastone").then((res) => {
//     console.log(res.data);
//     res.data.forEach((el) => {
//       console.log(el);
//       featuredPost.innerHTML += getFeaturedPost(el);
//     });
//   });
// }
// getFeaturedLatestPost();

const allPosts = document.querySelector(".all-posts");

function getAllPostsRow({ photo, category }) {
  return `
        <div class="allposts__content">
           <div class="allposts__img"><img width="547px" height="318px" style="object-fit: cover;" src="${IMAGE_URL}${
    photo._id
  }.${photo.name.split(".")[1]}"/></div>
         <div class="allposts__title"> 
            <h3>${category.name}</h3>
            <h6>${category.description.split("Iusto")[0]}</h6>
            <p> 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae illum
                at nobis hic tempore beatae, sint consectetur reprehenderit rem ipsa id,
                minima aliquam temporibus? at nobis hic tempore beatae, sint consectetur       
            </p>
          </div>
        </div>
  `;
}

function getAllPosts() {
  request.get("post").then((res) => {
    console.log(res.data);
    allPosts.innerHTML = "";
    res.data.data.forEach((el) => {
      allPosts.innerHTML += getAllPostsRow(el);
    });
  });
}

getAllPosts();
