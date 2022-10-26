const feedHeaderIcon = document.getElementById("feed-header-menu");
const feedMenu = document.getElementById("feedMenu");
const feedMenuCancel = document.getElementById("feedMenuCancel");
const likeBtn = document.getElementById("likeBtn");

feedHeaderIcon.onclick = function () {
  feedMenu.style.display = "flex";
};

feedMenuCancel.onclick = function () {
  feedMenu.style.display = "none";
};

var count = 27654;
function countPlus() {
  count = count + 1;
  document.querySelector(".like-count").innerHTML = "좋아요 " + count + "개";
}

likeBtn.onclick = function addLike() {
  likeBtn.style.color = "red";
  likeBtn.addEventListener("click", countPlus);
};
