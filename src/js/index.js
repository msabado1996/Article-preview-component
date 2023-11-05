const articleIconDiv = document.querySelector(".article-share-icons");
const articleFooter = document.querySelector(".article-footer");
const shareIcon = document.getElementById("share-icon");
const shareIconBack = document.getElementById("share-icon-back");

let isHidden = false;

shareIcon.addEventListener("click", function() {
    if (isHidden) {
        articleIconDiv.style.display = "flex";
        isHidden = false;
      } else {
        articleIconDiv.style.display = "none";
        isHidden = true;
      }
});

shareIconBack.addEventListener("click", function() {
    articleIconDiv.style.display = "none";
});

