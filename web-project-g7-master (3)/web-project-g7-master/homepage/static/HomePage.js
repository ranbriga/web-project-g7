function openAppointment() {
  var a = document.getElementById("myAppointment").style.display;
  if ( a != "block" ){
    document.getElementById("myAppointment").style.display = "block";
  }
}

function closeAppointment() {
    var b = document.getElementById("myAppointment").style.display;
  if ( b != "none" ){
    document.getElementById("myAppointment").style.display = "none";
  }
}

function openSignIn() {
  var a = document.getElementById("mySignIn").style.display;
  if ( a != "block" ){
    document.getElementById("mySignIn").style.display = "block";
  }
}

function closeSignIn() {
    var b = document.getElementById("mySignIn").style.display;
  if ( b != "none" ){
    document.getElementById("mySignIn").style.display = "none";
  }
}