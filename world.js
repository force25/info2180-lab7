window.onload = function(){
var button = document.getElementById("lookup");
var c_box = document.getElementById("checkbox");
var country = document.getElementById("country");

button.addEventListener('click',function(){
    var http = new XMLHttpRequest();
       http.onreadystatechange = function() {
      if (http.readyState === XMLHttpRequest.DONE && http.status === 200) {
      document.getElementById("result").innerHTML="<h3>Result</h3>"+http.responseText;
        }
    };
    if(c_box.checked){
           http.open("GET","world.php?all=true",true);
       }else{
           http.open("GET","world.php?country="+country.value,true);
       }
       http.send();
});
}