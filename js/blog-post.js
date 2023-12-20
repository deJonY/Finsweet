const blogPost = document.querySelector(".blog-post");

function getBlogsPostRow(photo, ) {
  return `
      <div>
      <div class="blogs__content-span">
      </div>
      <div class="blogs__content-name">
      </div>
        <div class="blogs__content-description">
        </div>
      </div>
  `;
}

function getPostBlogs(data) {
  request.get("post/641211e883b154fb6bf11983").then((res) => {
    console.log(res);
  });
}
getPostBlogs();
