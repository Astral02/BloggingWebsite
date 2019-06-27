//redirecting click on 'All Posts' button to 'bloglist.html'
function openBlogList(){
  window.open("html/bloglist.html");
}


createPostModalFunction();



//'Create post' modal
function createPostModalFunction(){
  var modal = document.getElementById("createPostModal");
  var createPostBtnOpen = document.getElementById("createPostButton");
  var createPostBtnClose = document.getElementsByClassName("ModalClose")[1];

  createPostBtnOpen.onclick = function() {
    modal.style.display = "block";
  }
  createPostBtnClose.onclick = function() {
    modal.style.display = "none";
  }
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

}
