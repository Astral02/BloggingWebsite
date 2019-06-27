signInModalFunction();
signUpModalFunction();

function showSignUpModal()
{
    var signInModal=document.getElementById('signInModal');
    var signUpModal=document.getElementById('signUpModal');
    signUpModal.style.display="block";
    signInModal.style.display="none";
}

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
  function signUpModalFunction() {
    var sUmodal = document.getElementById("signUpModal");
    var signUpBtnOpen = document.getElementById("signUpButton");
    var signUpBtnClose = document.getElementsByClassName("close")[0];
  
    signUpBtnOpen.onclick = function() {
      sUmodal.style.display = "block";
    }
    signUpBtnClose.onclick = function() {
      sUmodal.style.display = "none";
    }
    window.onclick = function(event1) {
      if (event1.target == sUmodal) {
        sUmodal.style.display = "none";
      }
    }
  }