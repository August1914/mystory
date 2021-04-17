//auto expand textarea
function adjust_textarea(h) {
    h.style.height = "20px";
    h.style.height = (h.scrollHeight)+"px";
    ckConsent();
}

function ckConsent() {
  if (document.getElementById("chkAgree1").checked == true &&
      document.getElementById("chkAgree2").checked == true &&
      document.getElementById("chkAgree3").checked == true &&
      document.getElementById('story').value != '' &&
      document.getElementById('name').value != '' &&
      document.getElementById('email').value != '')
  document.getElementById("btnSubmit").disabled = false;
  else
  document.getElementById("btnSubmit").disabled = true;
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
