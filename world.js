window.onload = function(){
var button = document.getElementById("lookup");
var definition = document.getElementById("country");
button.addEventListener('click',function(){
    var http = new XMLHttpRequest();
       http.onreadystatechange = function() {
      if (http.readyState === 4 && http.status === 200) {
      alert(document.getElementById("result").innerHTML="<h3>Result</h3>"+http.responseText);
        }
    };
     http.open("GET", "world.php?q=",true);
     http.send();
})
}