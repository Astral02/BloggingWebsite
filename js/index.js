//redirecting click on 'All Posts' button to 'bloglist.html'
function openBlogList(){
  window.open("html/bloglist.html");
}

signInModalFunction();
createPostModalFunction();

//'Sign In' modal
function signInModalFunction() {
  var sImodal = document.getElementById("signInModal");
  var signInBtnOpen = document.getElementById("signInButton");
  var signInBtnClose = document.getElementsByClassName("ModalClose")[0];

  signInBtnOpen.onclick = function() {
    sImodal.style.display = "block";
  }
  signInBtnClose.onclick = function() {
    sImodal.style.display = "none";
  }
  window.onclick = function(event) {
    if (event.target == sImodal) {
      sImodal.style.display = "none";
    }
  }
}

//Please add 'sign up' Modal

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
