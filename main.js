function myFunction() {

    var copyText = document.getElementById("myInput");

    copyText.select();
    copyText.setSelectionRange(0, 99999);
  
    navigator.clipboard.writeText(copyText.value);
  
    alert("Copied the text: " + copyText.value + " :)");
  }

var pin = document.getElementById("pin1").value;

function check1(){
  if(pin == "1836"){
    window.location("index.html")
  } 

}