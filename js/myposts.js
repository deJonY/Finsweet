let myPosts = document.getElementById("myposts");
const mypostsSmallTitle = document.getElementById("small-title");
const mypostsTitle = document.getElementById("myposts-title");
const mypostsDescription = document.getElementById("myposts-description");
const mypostsImage = document.getElementById("myposts-image");
const myPostsBtn = document.getElementById("myposts-add-btn");

let selected = null;
let page = 1;
let limit = 12;
let pagination_items;

function getMyPostsRow({ _id, photo, category: { name, description } }) {
  return `
        <div class="myposts__content">
           <div class="myposts__img"><img width="547px" height="318px" style="object-fit: cover;" src="${IMAGE_URL}${
    photo._id
  }.${photo.name.split(".")[1]}"/></div>
         <div class="myposts__title"> 
            <h3>${name}</h3>
            <h6>${description.split("Iusto")[0]}</h6>
            <p> 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae illum
                at nobis hic tempore beatae, sint consectetur reprehenderit rem ipsa id,
                minima aliquam temporibus? at nobis hic tempore beatae, sint consectetur       
            </p>
            <div class="myposts-btn">
              <button class="btn btn-danger myposts__btn" onclick="deletemyposts(${_id})" >Del</button>
              <button class="btn btn-primary myposts__btn" onclick="editmyposts(${_id})" data-bs-toggle="modal" data-bs-target="#myposts-modal">Edit</button>
            </div>
          </div>
        </div>
  `;
}

function getMyPosts() {
  request.get("post").then((res) => {
    res.data.data.forEach((el) => {
      myPosts.innerHTML += getMyPostsRow(el);
    });
  });
}

getMyPosts();

myPosts.addEventListener("submit", function (e) {
  e.preventDefault();
  let check = this.checkValidity();
  this.classList.add("was-validated");
  if (check) {
    bootstrap.Modal.getInstance(teacherModal).hide();
    let data = {
      photo: mypostsImage.value,
      name: mypostsSmallTitle.value,
      description: mypostsTitle.value,
    };
    if (selected) {
      request.put(`post/6412135c83b154fb6bf119a3/${selected}`).then(() => {
        alert("MyPosts is edited");
        getMyPosts();
      });
    } else {
      request.get("post/6412135c83b154fb6bf119a3").then(() => {
        alert("MyPosts is added");
        getMyPosts();
      });
    }
  }
});

function editTeacher(_id) {
  selected = _id;
  myPostsBtn.innerHTML = "Save posts";
  fetch(ENDPOINT + `post/6412135c83b154fb6bf119a3/${_id}`)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      mypostsSmallTitle.value = res.name;
      mypostsTitle.value = res.description;
    });
}

function deleteTeacher(_id) {
  let check = confirm("Rostanam o'chirishni xohlaysizmi ?");
  if (check) {
    fetch(ENDPOINT + `post/${_id}`, { method: "DELETE" }).then(() => {
      getMyPosts();
    });
  }
}
