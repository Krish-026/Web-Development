
// var tablinks = document.getElementsByClassName("tab-links");
// var tabcontents = document.getElementsByClassName("tab-contents");
// function opentab(tabname) {
//     for (tablink of tablinks) {
//         tablink.classList.remove("active-link");
//     }

//     for (tabcontent of tabcontents) {
//         tabcontent.classList.remove("active-tab");
//     }
//     event.currentTarget.classList.add("active-link");
//     document.getElementById(tabname).classList.add("active-tab");
// }




var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.addEventListener("click", function(e) {
      for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active-link");
      }

      for (let i = 0; i < tabcontents.length; i++) {
        tabcontents[i].classList.remove("active-tab");
      }

      e.currentTarget.classList.add("active-link");
      document.getElementById(tabname).classList.add("active-tab");
    });
  }
}


//  -------------------------

var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}
function closemenu() {
    sidemenu.style.right = "-200px";
}


// -------------------------------------------------
const scriptURL =
    "https://script.google.com/macros/s/AKfycbzELacj0m8dnmxkXi49zhRGvLCd9Qw_W2eY-TTMflWAYG30BIR_5FjhuERzK33ZXbwbzA/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then((response) => {
            msg.innerHTML = "Message send successfully"
            setTimeout(function () {
                msg.innerHTML = ""
            }, 2000)
            form.reset()
        })
        .catch((error) => console.error("Error!", error.message));
});
